# Video Score BIBBOX application

## Prerequisites
* `docker`
* `node`
* `npm`
* `amgular-cli`

## Usage
* Clone this repository
* Then navigate back and execute following commands:
  * `docker-compose build`
  * `docker-compose up`
  * *OR* just run one command: `docker-compose -f docker-compose.yml up --build`
* Open Browser and type following URL for the main App
  * `http://127.0.0.1:8077` - The Angular App  
  * `http://127.0.0.1:8077/api` - Flask API root
  * `http://127.0.0.1:8077/api/ping` - Flask API ping with json return.
* Open Browser and type following URL for the helper Apps
  * `http://127.0.0.1:8078` - Adminer Postgres Browser,  U:postgres, P:postgres, DB:users_dev 
  * `http://127.0.0.1:8079` - Celery Monitor

## Usefull Commands in Development
* In the root directory (Flask backend)
  * `docker ps`
  * `docker restart bibbox-movie-analyzer-celery` celery restart, necessary when the celery task is changed
  * `docker exec -it bibbox-movie-analyzer-flask  /bin/bash` -  enter the flask docker container
* In the flask docker container
    * `ps aux | grep uwsgi`
    * `kill - SIGHUP `  add the uwsgi root process number to reload the server 
* In the client directory (Angular frontend)
  * `ng serve --port 4401`
  * `ng build --deleteOutputPath=false`
  * `ng generate component stripes`

## Project Components (Directory Structure)

* **client** 
    * Frontend Angular code.
* **nginx** 
    * ginx config file and Dockerfile for running the nginx container. 
    * This container serves the Angular code and also passes request to backend.
* **postgresql**
    * This directory holds the Dockerfile for running PostgreSQL database. 
    * It also contains `init.sql` script to create a sample database when postres docker container initializes.
* **server**
    * server side code. 
    * **Flask** app, **tests** setup and 
    * configs and settings files required by the backend.  
    * Dockerfile for running the flask container and celery containers .
* **.env**
    * A simple `.env` file to set the environment variables for Flask and Postgres. 
    * We can have multiple versions of this file for different environments.
*  **docker-compose.yml**
    * This file is used by the Docker to create the containers and run your app. 
    * We can have multiple versions of this file for different environments.

## Working
The request from an external user hits the *nginx* web server on port 80. Depending on the 
__URL__,the request is served using Angular code or it is sent to Flask web application. In this 
app, all request URL starting with */api* is sent to Flask web service. The Flask docker 
container is also running and it exposes port 5000. These setting are defined in *nginx.conf* 
file. In this way, nginx is aware of both Frontend and Backend services. The Flask container 
talks to the PostgreSQL database on port 5432 for any request that require database operations. 


## Running Python Tests:
* All Flask/Python unit tests resides inside the `server/tests` directory and managed by `manage
.py` Python file.
* Run the sample tests using following command:
    * `docker-compose -f docker-compose.yml run --rm flask_demo python manage.py test`

