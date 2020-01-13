import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SimpleServiceModule } from './01-simpleService/simple-service.module';
import { ServiceHierarchyModule } from './02-serviceHierarchy/service-hierarchy.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SimpleServiceModule,
    ServiceHierarchyModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
