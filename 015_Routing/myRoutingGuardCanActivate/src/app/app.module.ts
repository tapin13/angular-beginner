import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PhraseService } from './shared/phrase.service';
import { HomeComponent } from './home/home.component';
import { PhrasesModule } from './phrases/phrases.module';
import { AdminModule } from './admin/admin.module';

import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule,
    AdminModule,
  ],
  providers: [
      PhraseService,
      AuthGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
