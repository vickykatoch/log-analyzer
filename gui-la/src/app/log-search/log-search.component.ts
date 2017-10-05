import { Observable } from 'rxjs/Observable';
import { LogSearchService, ILogData } from './log-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.scss']
})
export class LogSearchComponent implements OnInit {
  logData : ILogData[] = [];

  constructor(private searchService: LogSearchService) { 
    
  }

  ngOnInit() {

  }
  onSearch(term: string) {
    this.searchService.search(term).subscribe(data=> this.logData=data);
  }

}
