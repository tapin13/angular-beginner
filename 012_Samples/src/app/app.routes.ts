import { Routes } from '@angular/router';

import { BookComponent, CounterHostComponent, TimerHostComponent } from './01_components';

export const routes: Routes = [
    { path: "", redirectTo: "01_styles", pathMatch: "full" },
    { path: "01_styles", component: BookComponent },
    { path: "02_inputs", component: CounterHostComponent },
    { path: "03_outputs", component: TimerHostComponent },
];
