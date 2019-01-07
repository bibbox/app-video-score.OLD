# -*- coding: utf-8 -*-
"""User Route for Demo application."""

from flask import Blueprint
from flask import Flask, request, jsonify, url_for, send_file
from time import sleep
import random
from celery import Celery

from server.app.api import api

from server.app.celerytasks.tasks  import callCommandSync
from server.app.services.movie_service import MovieService
from server.app.services.movie_utils import stripeFileName

movie_service = MovieService()

@api.route("/movies")
def get_movies():
    movies = movie_service.all()
    return movies

@api.route("/movie/<int:id>")
def get_movie(id):
    movie = movie_service.get(id)
    # MAKE A REAL RESPONE OBJECT
    print("*************************************")
    return jsonify(movie.as_dict() )

@api.route("/movie/<int:id>/command", methods = ['POST', 'GET'])
def execute_command (id):
     print("*************  execute a command *************")
     content = request.json
     callCommandSync (id, content)

#     return jsonify({}, 202, {'Location': "http://0.0.0.0:8077/api/movie/commandstatus/%s" % task.id})
     return jsonify({}, 400, {'Location': "http://0.0.0.0:8077/api/movie/commandstatus" })


@api.route("/movie/<int:id>/stripe/<int:sid>")
def get_stripe (id, sid):
     movie = movie_service.get(id)
     # TODO check if sid is in range
     filename = stripeFileName (movie, sid)
     print ("*************************************", filename)
     return send_file(filename, mimetype='image/jpg')

'''

@api.route('/movie/commandstatus/<task_id>')
def taskstatus(task_id):
    task = callCommand.AsyncResult(task_id)
    if task.state == 'PENDING':
        # job did not start yet
        response = {
            'state': task.state,
            'current': 0,
            'total': 1,
            'status': 'Pending...'
        }
    elif task.state != 'FAILURE':
        response = {
            'state': task.state,
            'current': task.info.get('current', 0),
            'total': task.info.get('total', 1),
            'status': task.info.get('status', '')
        }
        if 'result' in task.info:
            response['result'] = task.info['result']
    else:
        # something went wrong in the background job
        response = {
            'state': task.state,
            'current': 1,
            'total': 1,
            'status': str(task.info),  # this is the exception raised
        }
    return jsonify(response)

'''
