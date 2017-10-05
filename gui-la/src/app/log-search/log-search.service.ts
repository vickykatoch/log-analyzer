import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ILogData {
  time : string,
  text: string;
}


@Injectable()
export class LogSearchService {

  constructor(private http: HttpClient) { }

  search(ter: string) : Observable<ILogData[]> {
    return this.http.get<ILogData[]>('/api',{
      reportProgress : true
    });
  }

}
