import { Routes } from '@angular/router';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'phrases',
    component: PhraseListComponent
  },
  {
    path: 'phrase/:id',
    component: PhraseDetailsComponent
  },
];
