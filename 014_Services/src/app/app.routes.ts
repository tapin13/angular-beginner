import { Routes } from '@angular/router';

import { DataListComponent } from './01-simpleService/index';
import { CounterParentComponent } from './02-serviceHierarchy';

export const routes: Routes = [
    { path: "", redirectTo: "01_simpleService", pathMatch: "full" },
    { path: "01_simpleService", component: DataListComponent },
    { path: "02_serviceHierarchy", component: CounterParentComponent },
    
];
