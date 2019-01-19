import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Stripe } from './stripe';
import { Cut } from './cut';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MovieService {

  private movieAPI = 'http://127.0.0.1:8077/api/movies';  // URL to web api

  getMovies(): Observable<Movie[]> {
    let movies = this.http.get<Movie[]>(this.movieAPI)
    this.messageService.add('MovieService: fetched movies');
    return movies;
  }

  getMovie(id: number): Observable<Movie> {
    const url = `/api/movie/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie for id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  getStripes(id: number): Observable<Stripe[]> {
    const url = `/api/movie/${id}/stripes`;
    return this.http.get<Stripe[]>(url).pipe(
      tap(_ => this.log(`fetched stripes for id=${id}`)),
      catchError(this.handleError<Stripe[]>(`getStripes id=${id}`))
    );
  }

  getCuts(id: number): Observable<Cut[]> {
    const url = `/api/movie/${id}/cuts`;
    return this.http.get<Cut[]>(url).pipe(
      tap(_ => this.log(`fetched cuts for id=${id}`)),
      catchError(this.handleError<Cut[]>(`getCuts id=${id}`))
    );
  }


  addMovie (movie: Movie): Observable<Movie> {
    const url = `/api/movies`;
    return this.http.post<Movie>(url, movie, httpOptions).pipe(
      tap((Movie: Movie) => this.log(`added movie w/ id=${movie.id}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMovie(movie: Movie | number): Observable<Movie> {

    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `/api/movie/${id}`;

    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

 computeStripe(movie: Movie | number): Observable<Movie> {

    console.log("Compute Stripes Process in MOVIE SERVICES")

    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `/api/movie/${id}/command`;
    const command = `{ "command": "generate-stripes", "parameters": {"silent": "true"} }`

    return this.http.post<Movie>(url, command, httpOptions).pipe(
      tap(_ => this.log(`generate stripes id=${id}`)),
      catchError(this.handleError<Movie>('computeStripe'))
    );
  }

   computeCuts(movie: Movie | number): Observable<Movie> {

    console.log("Compute Cut Process in MOVIE SERVICES")
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `/api/movie/${id}/command`;
    const command = `{ "command": "compute-cuts", "parameters": {"silent": "true"} }`
    return this.http.post<Movie>(url, command, httpOptions).pipe(
      tap(_ => this.log(`compute cuts movie id=${id}`)),
      catchError(this.handleError<Movie>('computeCuts'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }
  constructor( private messageService: MessageService, private http: HttpClient) { }


}
