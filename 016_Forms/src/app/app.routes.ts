import { Routes } from '@angular/router';

import { EventsComponent, EventsObjectComponent, TemplateRefComponent, KeyEnterComponent, BlurComponent, MyListComponent } from './01_input/index';
import { UserFormComponent, UserForm2Component, UserForm3Component, UserForm4Component, UserForm5Component, UserForm6Component, UserForm7Component } from './02_forms';

export const routes: Routes = [
    { path: "", redirectTo: "01_events", pathMatch: "full" },
    { path: "01_events", component: EventsComponent },
    { path: "02_events_object", component: EventsObjectComponent },
    { path: "03_template_ref", component: TemplateRefComponent },
    { path: "04_key_enter", component: KeyEnterComponent },
    { path: "05_blur", component: BlurComponent },
    { path: "06_mylist", component: MyListComponent },
    { path: "01_userform", component: UserFormComponent },
    { path: "02_styles", component: UserForm2Component },
    { path: "03_form_custom_css", component: UserForm3Component },
    { path: "04_form_error_message", component: UserForm4Component },
    { path: "05_form_few_errors", component: UserForm5Component },
    { path: "06_form_submit", component: UserForm6Component },
    { path: "07_form_code_message", component: UserForm7Component },

];
