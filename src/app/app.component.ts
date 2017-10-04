import { Observable } from 'rxjs/Observable';
import { LogDataSarchServiceService } from './log-data-sarch-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logs = [];

  constructor(private svc: LogDataSarchServiceService) {
      
  }
  onSearch(term: string) {
    this.logs = [];
    this.svc.search(term)
      .subscribe(res=> {
        console.log(res);
        debugger;
        this.logs.push(res);
      }, err=> console.error(err));
  }
}
