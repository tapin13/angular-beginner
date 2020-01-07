import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ComponentsSamplesModule } from './01_components/components-samples.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsSamplesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
