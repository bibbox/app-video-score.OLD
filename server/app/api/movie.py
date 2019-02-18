# -*- coding: utf-8 -*-
"""User Route for Demo application."""
import cv2
import numpy as np
import csv
import pafy
import logging
import io
import os
import uuid
import json
import math

from flask import Blueprint
from flask import Flask, request, jsonify, url_for, send_file
from time import sleep
import random
from celery import Celery

from server.app.api import api
from server.app     import socketio

from server.app.celerytasks.tasks  import analyzeMovieSync
from server.app.services.movie_utils import stripeBaseDirectory, keframeBaseDirectory, keyFrameName, stripeFileName, stripeStaticURL, movieCacheDirectory, movieFileName

from flask_sse import sse
from flask_socketio import send, emit

from server.app import db
from server.app.models.movie import Movie
from server.app.models.tag import   Tag
from server.app.models.document import  Document
from server.app.models.content_element import  ContentElement

from server.app.services.movie_service import MovieService
from server.app.services.document_service import DocumentService


movie_service = MovieService()
document_service = DocumentService()
staticFN = 0


@api.route("/movies")
def get_movies():
    movies = movie_service.all()
    return movies

@api.route("/movie/<int:id>")
def get_movie(id):
    movie = movie_service.get(id)
    return jsonify(movie.as_dict() )

@api.route("/movie/<int:id>/command", methods = ['POST', 'GET'])
def execute_command (id):
     content = request.json
     print("execute the command ", content)
     analyzeMovieSync (id, content)
     return jsonify({}, 400, {'Location': "http://0.0.0.0:8077/api/movie/commandstatus" })

@api.route("/movie/<int:id>/stripe/<int:sid>")
def get_stripe_url (id, sid):
     movie = movie_service.get(id)
     # TODO check if sid is in range
     stripe = {'url': stripeStaticURL(movie, sid)}
     return jsonify(stripe)

@api.route("/movie/<int:id>/stripes")
def get_stripe_urls (id):
     movie = movie_service.get(id)
     # TODO check if sid is in range
     urls = []
     for i in range(0, movie.numberOfStripes):
         stripe = {'url': stripeStaticURL (movie, i)}
         urls.append (stripe)
     return jsonify(urls)

@api.route("/movie/<int:id>/frame/<int:fn>")
def get_frame(id,fn):
     movie = movie_service.get(id)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest(preftype="webm")
        cap = cv2.VideoCapture(play.url)

     if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

     kfd = keframeBaseDirectory(movie)

     if  not os.path.exists(kfd):
        os.makedirs(kfd)

     fullfilename =  keyFrameName (movie, fn, "big")  
     if os.path.exists(fullfilename):
           with open(fullfilename, 'rb') as cachedfile:
               return send_file(
                     io.BytesIO(cachedfile.read()),
                     attachment_filename='f.jpeg',
                     mimetype='image/jpg'
               )
     else:     
          cap.set(cv2.CAP_PROP_POS_FRAMES, fn)
          success, image = cap.read()
          ratio = 1.0 * movie.height / movie.width
          SMALLIMAGEWITH = 200
          SMALLIMAGEHEIGHT = int (SMALLIMAGEWITH * ratio)
          imgsmall = cv2.resize(image, (SMALLIMAGEWITH, SMALLIMAGEHEIGHT))
          cv2.imwrite(fullfilename,  imgsmall)
          success, imgtosend = cv2.imencode('.jpg', imgsmall)
          return send_file(
                     io.BytesIO(imgtosend),
                     attachment_filename='f.jpeg',
                     mimetype='image/jpg'
               )


@api.route("/movie/<int:id>/cuts")
def get_cuts(id):
     movie = movie_service.get(id)
     cuts = movie.tags
     cd = [x.as_dict() for x in cuts]
#     print (cd )
     sortetcuts = sorted(cd, key=lambda k: k['fn']) 
 #    print (sortetcuts )
     return jsonify(sortetcuts)


@api.route("/document/<int:id>")
def get_document(id):

     d = document_service.get(id)
     cedb = d.contentElements

     content_elements = {}
     for c in cedb:
          element = {'id':c.contentType, 'payload':c.content}
          content_elements.update ( {c.uuid:element } )
     
     document = {
          'name' : d.name,
          "content_element_index" :  d.contentIndex,
          'content_elements'  : content_elements
     }
     return (jsonify(document))

@api.route("/document/<int:id>/makeomcaches")
def makeomcaches(id):

     d = document_service.get(id)
     cedb = d.contentElements

     content_elements = {}
     for c in cedb:
          element = {'id':c.contentType, 'payload':c.content}
          content_elements.update ( {c.uuid:element } )
     
     document = {
          'name' : d.name,
          "content_element_index" :  d.contentIndex,
          'content_elements'  : content_elements
     }
     return (jsonify(d.as_dict()))

  


@api.route("/movie/<int:id>/setparams")
def setparams(id):
     movie = movie_service.get(id)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest(preftype="webm")
        cap = cv2.VideoCapture(play.url)

     if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

     movie.numberOfFrames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
     movie.width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
     movie.height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
     movie.fps = cap.get(cv2.CAP_PROP_FPS)

     db.session.commit()
     return jsonify(movie.as_dict() )


@api.route("/movie/<int:id>/tom")
def test_tom(id):

    movie = movie_service.get(id)
    if (movie.stripeStatus == 100.0 and movie.cutStatus == 100.0):

          docuuid = str(uuid.uuid4())
          d = Document(uuid=docuuid, name=movie.name+ " - default document",
                  contentIndex="", contentElements=[])
          db.session.add(d)
          db.session.commit()

          print("DOCUMENT CREATED WITH ID ", d.id)
          cuts = sorted([x.as_dict() for x in movie.tags], key=lambda k: k['fn'])
          print(cuts)

          startfn = 0
          ces = []
          ce_list = []

          todolistCache = []     
          for c in cuts:   
               endfn = c['fn']-1
               content = {'movieuuid':movie.uuid, 's':startfn, 'e':endfn}
               uuidstr = str(uuid.uuid4())
               ce = ContentElement(uuid = uuidstr, 
                                   documentID=d.id,
                                   contentType="movieref", 
                                   content=json.dumps(content))

               startfn = c['fn']
               ces.append(ce)
               todolistCache.append(content)
              
               ce_list.append (uuidstr)

          uuidstr = str(uuid.uuid4())
          endfn = movie.numberOfFrames - 1
          content = {'movieuuid':movie.uuid, 's':startfn, 'e':endfn}
          todolistCache.append(content)
          print ("MAKE OMIMAGE CACHE", movie.id, startfn, endfn)

          ce = ContentElement(uuid = uuidstr, 
                              documentID=d.id,
                              contentType="movieref", 
                              content=json.dumps(content))
          ces.append(ce)
          ce_list.append (uuidstr)
          d.contentElements = ces
          d.contentIndex = json.dumps(ce_list)
          db.session.commit()

          createOMcaches (movie, todolistCache)

    else:
          print("WE CAN NOT GENERATE A DOCUMENT")

    return jsonify(d.as_dict()) 

def createOMcaches (movie, todolistCache):

     staticFN  = 0
     SECONDS_PER_OMI = 4
     SMALLIMAGES     = 4
     aspectRatio = movie.height / movie.width
     
     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest(preftype="webm")
        cap = cv2.VideoCapture(play.url)
     if (movie.source  == "FILESYSTEM"):
        filename = movieFileName (movie)   
        cap = cv2.VideoCapture(filename)
  
     basdir = movieCacheDirectory(movie)
     basdir = os.path.join(basdir, "omi")   

     if  not os.path.exists(basdir):
        os.makedirs(basdir)

     maxframesPerOmi = round (movie.fps * SECONDS_PER_OMI)

     for omidesc in todolistCache:
          s = omidesc["s"]
          e = omidesc["e"]
          n = math.ceil ( (e-s+1) / maxframesPerOmi )
          dirnameomi = os.path.join(basdir,   "%08d_%08d" % (s,e) )

          if  not os.path.exists(dirnameomi):
                  os.makedirs(dirnameomi)

          deltastripes   =  (e-s+1) / n
          deltasmallimages  =  (e-s) / (n*SMALLIMAGES-1)
          print ("========================", s, "--", e)
          
          for si in range (n):
               s_str = round (s +    si    * deltastripes)
               e_str = round (s +    (si+1)* deltastripes) - 1 
               center = round (s +    si    * deltastripes + deltastripes/2)
               smallimagestart = []
               for sii in range (SMALLIMAGES):
                    si_fnr =  round (s +    si * deltasmallimages * SMALLIMAGES + sii * deltasmallimages)            
                    smallimagestart.append (si_fnr)

           #   filenamesubomi = os.path.join(dirnameomi,   "%08d_%08d" % (s_str,e_str))
               filenamesubomi = os.path.join(dirnameomi,   "%08d.jpg" % si)

           #    print (si, s_str, e_str, " = " , smallimagestart, " = ", small1-s, e-small4)
               print (filenamesubomi)     
               generateOMimage (movie, cap, filenamesubomi, aspectRatio, s_str, e_str, center, smallimagestart)


def generateOMimage (movie, cap, filename, aspectratio, s_str, e_str, center, smallimages):

    if os.path.exists(filename):
        return

    STRIPEPARTWIDTH = 1500

    SMALLIMAGES = 4
    SMALLIMAGEWITH = 100
    BIGIMAGEWITH = SMALLIMAGEWITH * SMALLIMAGES
    SMALLIMAGEHEIGHT = round(SMALLIMAGEWITH * aspectratio)
    BIGIMAGEHEIGTH = round(BIGIMAGEWITH * aspectratio)
    STRIPEHEIGHT = BIGIMAGEHEIGTH
    HEIGHT = STRIPEHEIGHT + SMALLIMAGEHEIGHT + BIGIMAGEHEIGTH
    WIDTH = BIGIMAGEWITH

    stripeToRead = e_str - s_str + 1
    stripeToReadRemaining = stripeToRead

    firstStripeImage = int(s_str / STRIPEPARTWIDTH)
    lastStripeImage = int(e_str / STRIPEPARTWIDTH)

    startInFirstStripeImage = s_str - firstStripeImage * STRIPEPARTWIDTH
    endInLastStripeImage    = e_str - lastStripeImage * STRIPEPARTWIDTH

    # print ("firstStripeImage = ", firstStripeImage, "startInFirstStripeImage = ", startInFirstStripeImage  )
    # print ("lastStripeImage = ",  lastStripeImage,  "endInLastStripeImage = ",     endInLastStripeImage )

    numberofbigimages   = 1
    numberofsmallimages = len(smallimages)

    # print(numberofbigimages, numberofsmallimages)

    omimage = np.zeros((HEIGHT,WIDTH,3), np.uint8)

    scale = WIDTH / (e_str - s_str)
    # print ("oMimageDuration = ", oMimageDuration, "omimagewidth", omimagewidth, "scale" , scale )

    xstripeimagesin = 0
    xstripeimagesout = 0
    for stripeNr in range(firstStripeImage, lastStripeImage+1):
        startx = 0
        endx   = STRIPEPARTWIDTH
        if (stripeNr == firstStripeImage):
            startx = startInFirstStripeImage
        if (stripeNr == lastStripeImage):
             endx = endInLastStripeImage

        xstripeimagesout = xstripeimagesin + (endx - startx)

        xstripeimagesinScaled   = round (xstripeimagesin * scale)
        xstripeimagesoutScaled  = round (xstripeimagesout * scale)

        # print("copy to (scaled) ", xstripeimagesinScaled, xstripeimagesoutScaled)

        str_filename = stripeFileName (movie, stripeNr)

        # print("READ stripe cache nr ", i, "look for data in ", startx, endx, endx-startx)

        stripecCacheImage = cv2.imread(str_filename, 3)

        sheight, swidth, schannels = stripecCacheImage.shape
        stripecCacheImageSelected = stripecCacheImage [0:sheight, startx:endx]
        striptImageWidthScaled    = xstripeimagesoutScaled - xstripeimagesinScaled
        # print ("final size = ", striptImageWidthScaled, STRIPEHEIGHT)
        stripecCacheImageScaled  = cv2.resize( stripecCacheImageSelected, (striptImageWidthScaled , STRIPEHEIGHT))

        ystart = SMALLIMAGEHEIGHT + BIGIMAGEHEIGTH
        yend = ystart + STRIPEHEIGHT
        omimage[ystart:yend, xstripeimagesinScaled:xstripeimagesoutScaled] = stripecCacheImageScaled
        xstripeimagesin = xstripeimagesout

    # big image at the center
    
    
    imagesToRead = smallimages
    
    cap.set(cv2.CAP_PROP_POS_FRAMES, center)
    sucess, capturedimage = cap.read()
    imgbig = cv2.resize(capturedimage, (BIGIMAGEWITH, BIGIMAGEHEIGTH))
    ystart = 0
    yend   = BIGIMAGEHEIGTH
    xstart = 0
    xend   = xstart +  BIGIMAGEWITH
    omimage[ystart:yend, xstart:xend] = imgbig
     #        print(BIGIMAGEWITH, BIGIMAGEHEIGTH, xstart, xend)

        # get the small images
    i = 0

    for si_framenr in smallimages:
        cap.set(cv2.CAP_PROP_POS_FRAMES, si_framenr)
        sucess, capturedimage = cap.read()
        imgsmall = cv2.resize(capturedimage, (SMALLIMAGEWITH, SMALLIMAGEHEIGHT))

        ystart = BIGIMAGEHEIGTH+1
        yend   = ystart + SMALLIMAGEHEIGHT
        xstart = i * SMALLIMAGEWITH
        xend   = (i+1) * SMALLIMAGEWITH
        omimage[ystart:yend, xstart:xend] = imgsmall
        i = i+1

    cv2.imwrite(filename,  omimage)

def getImageSequential (cap, fn)
     if fn > staticFN:
           cap.set(cv2.CAP_PROP_POS_FRAMES, fn)
           sucess, capturedimage = cap.read()
     else:
          while  (fn<staticFN)     
               success, image = cap.read()
               staticFN = staticFN + 1

     staticFN = fn
     return image

@api.route('/movie/syncmovie')
def publish_hello():
#   sse.publish(  {'id': 2, 'changes':{'name':'HEIMO'} }, type='greeting')
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : { 'id': 2, 'changes':{'name':'HEIMO'} }
                  }
                  ); 


#    send ('TEST', broadcast=True, namespace='/') 
    print (url_for("sse.stream", channel="users.social"))
    return "Message sent!"

@socketio.on('connect', namespace='/chat')
def test_connect():
    print ('WEBSOCKETS CONNECTED')
    emit('my response', {'data': 'Connected'})
