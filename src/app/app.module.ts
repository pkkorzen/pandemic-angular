import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LineComponent } from './line/line.component';
import { ConnectionComponent } from './connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LineComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    NgxSvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
