# -*- coding: utf-8 -*-
"""User Route for Demo application."""
import re
from flask import Blueprint
from flask import jsonify

from server.app.api import api

from server.app import app_celerey
from server.app.celerytasks.tasks  import create_test_task

@api.route("/tasks")
def  get_tasks():
    print ("get all celery tasks")
    i = app_celerey.control.inspect()   
    ativeTasks = i.active()
    scheduledTasks = i.reserved() 
    taskreport = []

    for w, tasks in ativeTasks.items():
        for task in tasks:
            taskid = task['id']
            result = app_celerey.AsyncResult(taskid)
            if result.state == 'PROGRESS':
                taskLog = {}
                taskLog['state'] = result.state
                taskLog['taskID'] = task['id']
                taskLog['actionID'] = result.info['actionID']
                taskLog['movieID'] = result.info['movieID']
                taskLog['progress'] = result.info['progress']       
                taskreport.append (taskLog)
 
    for w, tasks in scheduledTasks.items():
        for task in tasks:
            taskLog = {}

            args = task['args']
            #print (args)
            #
            # 'args': "(2, '[MOVIE] MAKE STRIPES')"
            #  ^\((\d+),\s'(.*?)'
            m = re.match (r"^\((\d+),\s'(.*?)'", args)
            #print (m.group(0))
            #print (m.group(1))
            #print (m.group(2))
            taskLog['state'] = 'SCHEDULED'
            taskLog['taskID'] = task['id']
            taskLog['movieID'] = int (m.group(1))
            taskLog['actionID'] = m.group(2)  
            taskLog['progress'] = 0

            taskreport.append (taskLog)
        
    tasksorderedbymmovie = sorted(taskreport, key=lambda k: k['movieID']) 

    i = 0
    for t in tasksorderedbymmovie:
        t['id'] = t['taskID']
        i += 1

    return jsonify( tasksorderedbymmovie)

@api.route("/tasks/create_test_task")
def  createTestTask():
    command = "[MOVIE] TEST"
    create_test_task.delay (1, command)
    return jsonify( 'OK')

@api.route("/tasks/<int:id>")
def get_Task(id):
    return user
    return jsonify({"status": 200, "msg":"Details for Celery Task %d are"%id } )
