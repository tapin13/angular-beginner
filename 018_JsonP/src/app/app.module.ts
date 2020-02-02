import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WikiComponent } from './01_wiki/01_get/wiki.component';
import { WikiService } from './01_wiki/01_get/wiki.service';
import { routes } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [ WikiService ],
  declarations: [
    AppComponent,
    WikiComponent
  ],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
