import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { InputModule } from './01_input/01-input.module';
import { FormModule } from './02_forms/01-input.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InputModule,
    FormModule

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
