import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  testRoute() {
    return this.http.get('http://0.0.0.0:8077/api/ping');
  }

}
