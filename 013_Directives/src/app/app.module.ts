import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BindingSamplesModule } from './01-binding/binding-samples.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BindingSamplesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
