import { Routes } from '@angular/router';

import { InterpolationComponent, PropertyBindingComponent } from './01-binding';

export const routes: Routes = [
    { path: "", redirectTo: "01_interpolation", pathMatch: "full" },
    { path: "01_interpolation", component: InterpolationComponent },
    { path: "02_property_binding", component: PropertyBindingComponent },
];
