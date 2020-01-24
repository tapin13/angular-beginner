import { Routes } from '@angular/router';

import { EventsComponent, EventsObjectComponent, TemplateRefComponent, KeyEnterComponent, BlurComponent, MyListComponent } from './01_input/index';

export const routes: Routes = [
    { path: "", redirectTo: "01_events", pathMatch: "full" },
    { path: "01_events", component: EventsComponent },
    { path: "02_events_object", component: EventsObjectComponent },
    { path: "03_template_ref", component: TemplateRefComponent },
    { path: "04_key_enter", component: KeyEnterComponent },
    { path: "05_blur", component: BlurComponent },
    { path: "06_mylist", component: MyListComponent },

];
