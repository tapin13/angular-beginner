import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListsComponent, routes } from './lists/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListsComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
