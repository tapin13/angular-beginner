import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { InputModule } from './01_input/01-input.module';
import { FormModule } from './02_forms/02-forms.module';
import { ReactiveFormsSamplesModule } from './03_reactive_forms/reactive-forms-samples.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InputModule,
    FormModule,
    ReactiveFormsSamplesModule

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
