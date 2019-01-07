# -*- coding: utf-8 -*-

from sqlalchemy import inspect
from server.app import db
from sqlalchemy.sql import func


class BaseModel(db.Model):
    """Base data model for all objects"""
    __abstract__ = True

    def __init__(self, *args):
        super().__init__(*args)

    def __repr__(self):
        """Define a base way to print models"""
        return '%s(%s)' % (self.__class__.__name__, {
            column: value
            for column, value in self.as_dict().items()
        })

    # def _as_dict(self):
    #     return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    # Preferred way
    # https://stackoverflow.com/questions/1958219/convert-sqlalchemy-row-object-to-python-dict
    def as_dict(self):
        return {c.key: getattr(self, c.key)
                for c in inspect(self).mapper.column_attrs}


class Movie(BaseModel, db.Model):
    """Model for movies table"""
    __tablename__ = "movies"

    id     = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uuid   = db.Column(db.String(128), nullable=True)
    name   = db.Column(db.String(128), nullable=False)
    source = db.Column(db.String(128), nullable=False)
    uri    = db.Column(db.String(128), nullable=False)
    width     = db.Column(db.Integer, nullable=True)
    height    = db.Column(db.Integer, nullable=True)
    stripeStatus   = db.Column(db.Float(), default=0.0, nullable=True)
    hasStripeImage = db.Column(db.Boolean(), default=False, nullable=False)

    active = db.Column(db.Boolean(), default=True, nullable=False)

    tags = db.relationship('FrameTag', backref='movies', lazy=True)

    def __init__(self, uuid, name, source, uri, active, width, height, stripeStatus=0.0):
        super().__init__()
        self.uuid = uuid
        self.name = name
        self.source = source
        self.uri = uri
        self.active = active
        self.width = width
        self.height = height
        self.stripeStatus = stripeStatus


class FrameTag (BaseModel, db.Model):
    """Model for movies table"""
    __tablename__ = "frametag"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uuid = db.Column(db.String(128), nullable=True)
    movieID = db.Column(db.Integer, db.ForeignKey('movies.id'),  nullable=False)
    fn   = db.Column(db.Integer, nullable=False)
    tag =  db.Column(db.String(16), nullable=True)

    def __init__(self, movieID,  uuid, uri, active, width, height):
        super().__init__()
        self.uuid = uuid
        self.movieID = movieID
        self.fn = fn
        self.tag = tag
