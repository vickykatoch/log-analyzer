import { LogSearchService } from './log-search/log-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LogSearchComponent } from './log-search/log-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LogSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LogSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
