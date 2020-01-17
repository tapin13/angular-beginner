import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PhraseService } from './shared/phrase.service';
import { HomeComponent } from './home/home.component';
import { PhrasesModule } from './phrases/phrases.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule,
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
