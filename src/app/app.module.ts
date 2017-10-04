import { LogDataSarchServiceService } from './log-data-sarch-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LogDataSarchServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
