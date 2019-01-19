from server.app.services.movie_service import MovieService
import os


def stripeStaticURL (movie, n):
    stripeimagedir = stripeBaseDirectory (movie)
    fn = os.path.join(stripeimagedir, "s%06d.jpg" % n)
    url = fn.replace ("/data/movies", "static")
    return url

def stripeFileName (movie, n):
    stripeimagedir = stripeBaseDirectory (movie)
    fn = os.path.join(stripeimagedir, "s%06d.jpg" % n)
    return fn

def stripeBaseDirectory (movie):

    dirname = os.path.dirname("/data/movies/yt/")

    stripeimagedir = ""

    if (movie.source == "YOUTUBE"):
        dirname = os.path.dirname("/data/movies/yt/")
        movieid = movie.uri.rsplit('/', 1)[-1]
        moviedir = os.path.join(dirname, movieid)
        stripeimagedir = os.path.join(moviedir, "stripes")

    return stripeimagedir


