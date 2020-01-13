import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BindingSamplesModule } from './01-binding/binding-samples.module';
import { TwoWayBindingSamplesModule } from './02-two-way-binding/two-way-binding-samples.module';
import { BindInDirectiveSamplesModule } from './03-bind-in-directive/bind-in-directive-samples.module';
import { TemplatesSamplesModule } from './04-templates/templates-samples.module';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BindingSamplesModule,
    TwoWayBindingSamplesModule,
    BindInDirectiveSamplesModule,
    TemplatesSamplesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
