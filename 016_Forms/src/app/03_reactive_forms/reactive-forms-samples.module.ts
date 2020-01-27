import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlSampleComponent, FormControlSample2Component, FormControlSample3Component, FormControlSample4Component, FormControlSample5Component } from "./index";

@NgModule({
    declarations: [
        FormControlSampleComponent,
        FormControlSample2Component,
        FormControlSample3Component,
        FormControlSample4Component,
        FormControlSample5Component
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ReactiveFormsSamplesModule {}
