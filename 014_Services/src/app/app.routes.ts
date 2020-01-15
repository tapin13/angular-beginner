import { Routes } from '@angular/router';

import { DataListComponent } from './01-simpleService/index';
import { CounterParentComponent } from './02-serviceHierarchy';
import { Sample1Component, Sample2Component, Sample3Component } from './03-providers';

export const routes: Routes = [
    { path: "", redirectTo: "01_simpleService", pathMatch: "full" },
    { path: "01_simpleService", component: DataListComponent },
    { path: "02_serviceHierarchy", component: CounterParentComponent },
    { path: "01_providerLiteral", component: Sample1Component },
    { path: "02_providerAliase", component: Sample2Component },
    { path: "03_providerValue", component: Sample3Component },
    
];
