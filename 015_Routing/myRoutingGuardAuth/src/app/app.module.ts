import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PhraseService } from './shared/phrase.service';
import { HomeComponent } from './home/home.component';
import { PhrasesModule } from './phrases/phrases.module';
import { AdminModule } from './admin/admin.module';

import { AuthGuard } from './shared/auth-guard.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PhrasesModule,
    AdminModule,
    LoginRoutingModule
  ],
  providers: [
      PhraseService,
      AuthGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
