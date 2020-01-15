import { Routes } from '@angular/router';

import { DataListComponent } from './01-simpleService/index';
import { CounterParentComponent } from './02-serviceHierarchy';
import { Sample1Component, Sample2Component, Sample3Component, Sample4Component, Sample5Component, Sample6Component, Sample7Component, Sample8Component } from './03-providers';

export const routes: Routes = [
    { path: "", redirectTo: "01_simpleService", pathMatch: "full" },
    { path: "01_simpleService", component: DataListComponent },
    { path: "02_serviceHierarchy", component: CounterParentComponent },
    { path: "01_providerLiteral", component: Sample1Component },
    { path: "02_providerAliase", component: Sample2Component },
    { path: "03_providerValue", component: Sample3Component },
    { path: "04_providerFactry", component: Sample4Component },
    { path: "05_providerOpaque", component: Sample5Component },
    { path: "06_providerOptional", component: Sample6Component },
    { path: "07_providerInjector", component: Sample7Component },
    { path: "08_providerImplicit", component: Sample8Component },
    
];
