import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ItemData } from './01_in-memory-server/in-memory-server';
import { MyHTTPModule } from './01_in-memory-server/01-http.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ItemData),
    MyHTTPModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
