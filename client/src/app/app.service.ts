import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  myData: any;

  constructor(private http: HttpClient) {
  }

  testRoute() {
    console.log ("connect the event listener")
//    this.connect();
    return this.http.get('http://0.0.0.0:8077/api/ping');
  }

/*
  connect(): void {
    let source = new EventSource('http://0.0.0.0:8077/stream');
    source.addEventListener('greeting', message => {
        this.myData = message;
        console.log (message)
    });

 }
*/

}
