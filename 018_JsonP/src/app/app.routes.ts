import { Routes } from '@angular/router';

import { WikiComponent } from './01_wiki/index';

export const routes: Routes = [
    { path: '', redirectTo: '01_wiki-request', pathMatch: 'full' },
    { path: '01_wiki-request', component: WikiComponent },

];
