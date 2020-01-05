import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldListComponent } from './hello-world-list/hello-world-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
