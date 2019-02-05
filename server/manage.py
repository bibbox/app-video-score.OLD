"""
Test Suite for Flask. 
To run:
python test_suite test
python test_suite cov
"""

import unittest
from coverage import coverage
from flask_script import Manager

from server.app import db, create_app
from server.app.models.user  import User
from server.app.models.movie import Movie

COV = coverage(
    branch=True,
    include='app/*',
    omit=[
        'tests/*',
        'wsgi.py',
        'settings.py',
        '__init__.py',
        'app/*/__init__.py'
        'app/static/*'
        'app/templates/*'
        'app/import_policy/*'
        'app/models/*'
    ]
)

COV.start()

# create flask application instance
socketio, app  = create_app ('development')
manager = Manager(app)


@manager.command
def test():
    """Runs the unit tests without test coverage."""
    test_suite = unittest.TestLoader().discover('tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(test_suite)
    if result.wasSuccessful():
        return 0
    return 1

@manager.command
def cov():
    """Runs the unit tests with coverage."""
    tests = unittest.TestLoader().discover('tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Coverage Summary:')
        COV.report()
        COV.html_report(directory='tests/coverage')
        COV.erase()
        return 0
    return 1

@manager.command
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@manager.command
def seed_db():
    """Seed the user table in test_db database."""
    db.session.add(User(
        username='v',
        email='v@bibbox.com',
        password='vendetta'
    ))
    db.session.add(User(
        username='mue',
        email='heimo.mueller@mac.com',
        password='denkdenk'
    ))
    db.session.add(Movie(
        uuid ="",
        name = "Die Katze von London",
        source = "YOUTUBE",
        uri = "https://youtu.be/SUS9rVwBDH0",
        active = True,
        width = "-1",
        height = "-1"
    ))
    db.session.add(Movie(
        uuid="",
        name="Der Würger von London",
        source="YOUTUBE",
        uri="https://youtu.be/4iwyvroMhDE",
        active=True,
        width="-1",
        height="-1"
    ))
    db.session.add(Movie(
        uuid="",
        name="Der Hund von Blackwood Castle",
        source="YOUTUBE",
        uri="https://youtu.be/tiNPFqalCh0",
        active=True,
        width="-1",
        height="-1"
    ))
    db.session.commit()

if __name__ == '__main__':
    manager.run()
