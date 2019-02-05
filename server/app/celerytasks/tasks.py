import os
import time
import random
import cv2
import numpy as np
import csv
import pafy

import logging

import scenedetect
from scenedetect.video_manager  import VideoManager
from scenedetect.scene_manager  import SceneManager
from scenedetect.frame_timecode import FrameTimecode
from scenedetect.stats_manager  import StatsManager
from scenedetect.detectors      import ContentDetector

from flask_sse import sse
from flask import current_app, render_template
from server.app import app_celerey

from server.app.models.movie import Movie
from server.app.models.tag import   Tag
from server.app.services.movie_service import MovieService
from server.app.services.tag_service import TagService

from server.app.services.movie_utils import stripeBaseDirectory, stripeFileName


from celery.utils.log import get_task_logger

cel_logger = app_celerey.log.get_default_logger()
app_celerey.log.redirect_stdouts_to_logger (cel_logger)

movie_service = MovieService()
tag_service   = TagService()

tasklogger = get_task_logger(__name__)

taskID_ofCutDededection__MovieID = {}

class ParseCutDedectionProgress(logging.Filter):
    def filter(self, record):
        
# [2019-02-04 23:54:28,934: INFO/ForkPoolWorker-1] tasks.callCommand[46e3a4c7-2581-4dd3-8700-aacabdc3358f]: START COMPUTE CUTS=3
# [2019-02-04 23:46:29,592: WARNING/ForkPoolWorker-1] 96%|#########5| 6063/6317 [00:30<00:01, 223.79frames/s]
# [2019-02-04 23:46:30,864: INFO/ForkPoolWorker-1] tasks.callCommand[3ecdcbf5-a9ed-4742-813a-3c2650f69c23]: END COMPUTE CUTS=3

        if record.getMessage().find('START COMPUTE CUTS'):
            print ("=========================> REGISTER ID")
            movieID = 3
            TaskID = 'ForkPoolWorker-1'
            taskID_ofCutDededection__MovieID.update({TaskID : movieID})
        if record.getMessage().find('END COMPUTE CUTS'):
            print ("X=========================>  DELETE ID", record.getMessage())
        
        print ('YY', record.getMessage())

        # loog for TaskID, filter pecentage and set in DB
        
        return True

tasklogger.addFilter(ParseCutDedectionProgress())
tasklogger.setLevel(logging.INFO)

def callCommandSync(movieId, command):
    callCommand.delay (movieId, command)


@app_celerey.task(bind=True, name='tasks.callCommand')
def callCommand(self, movieId, command):

    print (cel_logger)
    print (tasklogger)

    print ("************  execute ", movieId, command['command'] )
    if (command['command'] == "generate-stripes"):
       n=1
#        generateStripes(movieId)

    if (command['command'] == "compute-cuts"):
        computeCuts (movieId)

#    self.update_state(state='PROGRESS', meta={'current': i, 'total': total, 'status': message})
    return {'current': 100, 'total': 100, 'status': 'Task completed!','result': 42}


def generateStripes(movieID):

     movie = movie_service.get(movieID)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest(preftype="webm")
        cap = cv2.VideoCapture(play.url)

     length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
     width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
     height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
     fps = cap.get(cv2.CAP_PROP_FPS)
     print("OPENING THE VIDEO WITH ", length, width, height, fps)

     stripeimagedir = stripeBaseDirectory (movie)
#     print("dir to write the stripes", stripeimagedir)
     if  not os.path.exists(stripeimagedir):
        os.makedirs(stripeimagedir)

     movie.stripeStatus = 0
     movie = movie_service.save(movie)
     syncMovieInClient (movie)   
     maxstripesize = 1500
     stripeImage = np.zeros((height,maxstripesize,3), np.uint8)

     count    = 0
     countsec = 0
     countbig = 0
     seconds  = 0
     stripeimagecounter = 0
     stripenumber       = 0
     writelaststripe = 0

     success = 1
     while success:

        success, image = cap.read()

        if (success):
            stripe = image [0:height, int(width/2):int(width/2)+1]
            stripeImage [0:height, stripeimagecounter:stripeimagecounter+1] = stripe
            count    += 1
            countsec += 1
            countbig += 1
            stripeimagecounter +=1

            if  (countsec==2*fps):
                countsec = 0
                seconds +=2
                perz =  100.0 * float(count+1) / float (length)
                perzi = int (perz+0.5)
                if (perzi != movie.stripeStatus):
                    movie.stripeStatus = 1.0 * perzi
                    movie = movie_service.save(movie)
                    syncMovieInClient (movie)    
            if (countbig == 10*fps):
                countbig = 0

            if (stripeimagecounter == maxstripesize):
                fn = stripeFileName (movie, stripenumber)
                cv2.imwrite(fn,  stripeImage)
                stripeImage = np.zeros((height, maxstripesize, 3), np.uint8)
                stripeimagecounter = 0
                stripenumber += 1
                writelaststripe = 1
                movie.numberOfStripes = stripenumber + 1
                movie = movie_service.save(movie)
                syncMovieInClient (movie)   

     if (writelaststripe):
        fn = stripeFileName(movie, stripenumber)
        cv2.imwrite(fn, stripeImage)

     movie.stripeStatus = 100.0
     movie.numberOfStripes = stripenumber + 1
     movie = movie_service.save(movie)
     syncMovieInClient (movie)   

     #print (count+1, " frames found, theory = ", length)

def syncMovieInClient (movie):
    n = 4
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : { 'id': movie.id, 'changes':{'stripeStatus':movie.stripeStatus, 'numberOfStripes':movie.numberOfStripes } }
                  }
               ); 


def computeCuts(movieID):

    movie = movie_service.get(movieID)

    print ('START COMPUTE CUTS=' + str(movieID))
    tasklogger.info ('START COMPUTE CUTS=')
    if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest(preftype="webm")
        cap = cv2.VideoCapture(play.url)

    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    for t in movie.tags:
        tag_service.delete(t)

    tags = []
    stats_manager = StatsManager()
    scene_manager = SceneManager(stats_manager)
    scene_manager.add_detector(ContentDetector(threshold=27.0, min_scene_len=15))
    scene_manager.detect_scenes(frame_source=cap)

    basetimecode = FrameTimecode(timecode=0, fps=fps)
    scene_list = scene_manager.get_scene_list(basetimecode)


    for i, scene in enumerate(scene_list):
       tag = Tag (movieID=movieID, fn=scene[0].get_frames(), tag="CUT")
       tags.append (tag)

    print ('END COMPUTE CUTS=' + str(movieID))

    movie.tags = tags
    movie = movie_service.save(movie)

def testyoutube():
    url = 'https://youtu.be/4iwyvroMhDE'
    vPafy = pafy.new(url)
    print (vPafy)
    play = vPafy.getbest(preftype="webm")
    print (play)
    print(play.url)
    cap = cv2.VideoCapture(play.url)

    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("OPENING THE VIDEO WITH ", length, width, height, fps)

def testlocalfile():
    filename = 'server/TESTDATA/2017-11-23 08-24-16.mp4'
    cap = cv2.VideoCapture(filename)
    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("OPENING THE VIDEO WITH ", length, width, height, fps)