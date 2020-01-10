import { Routes } from '@angular/router';

import { BookComponent, CounterHostComponent, TimerHostComponent, NameCardHostComponent, MessageBoxHostComponent } from './01_components';
import { Sample1HostComponent, Sample2HostComponent, Sample3HostComponent, Sample4HostComponent } from './02_lifecycle';
import { BlockHostComponent, Block2HostComponent, ListHostComponent } from './03_child_and_content';

export const routes: Routes = [
    { path: "", redirectTo: "01_styles", pathMatch: "full" },
    { path: "01_styles", component: BookComponent },
    { path: "02_inputs", component: CounterHostComponent },
    { path: "03_outputs", component: TimerHostComponent },
    { path: "04_properties", component: NameCardHostComponent },
    { path: "05_projections", component: MessageBoxHostComponent },
    { path: "01_ngoninit", component: Sample1HostComponent },
    { path: "02_ngonchange", component: Sample2HostComponent },
    { path: "03_ngonchange", component: Sample3HostComponent },
    { path: "04_allevents", component: Sample4HostComponent },
    { path: "01_child", component: BlockHostComponent },
    { path: "02_children", component: Block2HostComponent },
    { path: "03_content", component: ListHostComponent },
];
