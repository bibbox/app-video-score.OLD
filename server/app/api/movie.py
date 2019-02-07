# -*- coding: utf-8 -*-
"""User Route for Demo application."""

from flask import Blueprint
from flask import Flask, request, jsonify, url_for, send_file
from time import sleep
import random
from celery import Celery

from server.app.api import api
from server.app     import socketio

from server.app.celerytasks.tasks  import analyzeMovieSync
from server.app.services.movie_service import MovieService
from server.app.services.movie_utils import stripeFileName, stripeStaticURL

from flask_sse import sse
from flask_socketio import send, emit

movie_service = MovieService()

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

#     return jsonify({}, 202, {'Location': "http://0.0.0.0:8077/api/movie/commandstatus/%s" % task.id})
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

@api.route("/movie/<int:id>/cuts")
def get_cuts(id):
     movie = movie_service.get(id)
     return jsonify([x.as_dict() for x in movie.tags])

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