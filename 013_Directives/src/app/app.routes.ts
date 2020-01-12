import { Routes } from '@angular/router';

import { InterpolationComponent, PropertyBindingComponent, EventBindingComponent, 
    AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent } from './01-binding';
import { CalcComponent, Calc2Component } from './02-two-way-binding';
import { NgClassComponent, NgStyleComponent, NgIfComponent, NgSwitchComponent, NgForComponent } from './03-bind-in-directive';

export const routes: Routes = [
    { path: "", redirectTo: "01_interpolation", pathMatch: "full" },
    { path: "01_interpolation", component: InterpolationComponent },
    { path: "02_property_binding", component: PropertyBindingComponent },
    { path: "03_event_binding", component: EventBindingComponent },
    { path: "04_attribute_binding", component: AttributeBindingComponent },
    { path: "05_class_binding", component: ClassBindingComponent },
    { path: "06_style_binding", component: StyleBindingComponent },

    { path: "01_ngModel", component: CalcComponent },
    { path: "02_ngModel_Inside", component: Calc2Component },

    { path: "01_ngClass", component: NgClassComponent },
    { path: "02_ngStyle", component: NgStyleComponent },
    { path: "03_ngIf", component: NgIfComponent },
    { path: "04_ngSwitch", component: NgSwitchComponent },
    { path: "05_ngFor", component: NgForComponent },
];
