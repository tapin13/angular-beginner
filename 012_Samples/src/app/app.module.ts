import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ComponentsSamplesModule } from './01_components/components-samples.module';
import { ComponentsSamplesModule2 } from './02_lifecycle/components-samples.module';
import { ComponentsSamplesModule3 } from './03_child_and_content/child-and-content-samples.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsSamplesModule,
    ComponentsSamplesModule2,
    ComponentsSamplesModule3,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
