import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";


@Injectable()
export class LogDataSarchServiceService {

  constructor(private http: HttpClient) { }

  search(term: string) : Observable<string> {
    let headers: HttpHeaders;
    // headers.append()
    return this.http.get<string>('/api');
  }
}
