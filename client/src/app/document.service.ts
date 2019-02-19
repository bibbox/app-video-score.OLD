import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stripe } from './stripe';
import { Cut } from './cut';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


export class DocListEntry {
  id: number;
  name: string;
  uuid: string;
}

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DocumentService {

  private movieAPI = '/api/documents';  // URL to web api

  constructor(private messageService: MessageService,
               private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getDocuments(): Observable<DocListEntry[]> {
    const url = `/api/documents`;
    return this.http.get<DocListEntry[]>(url).pipe(
      catchError(this.handleError<DocListEntry[]>(`getDocuments`))
    );
  }

  getDocument(): Observable<DocListEntry[]> {
    const url = `/api/documents`;
    return this.http.get<DocListEntry[]>(url).pipe(
      catchError(this.handleError<DocListEntry[]>(`getDocuments`))
    );
  }

}

