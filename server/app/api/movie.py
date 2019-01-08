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
from server.app.services.movie_utils import stripeFileName, stripeStaticURL

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
     print("*************  execute a command *************")
     content = request.json
     callCommandSync (id, content)

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
