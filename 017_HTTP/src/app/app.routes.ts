import { Routes } from '@angular/router';

import { AppComponent, App2Component, App3Component, App4Component } from './01_in-memory-server/index';

export const routes: Routes = [
    { path: "", redirectTo: "01_get-request", pathMatch: "full" },
    { path: "01_get-request", component: AppComponent },
    { path: "02_post-request", component: App2Component },
    { path: "03_request-options", component: App3Component },
    { path: "04_query-string", component: App4Component },


];
