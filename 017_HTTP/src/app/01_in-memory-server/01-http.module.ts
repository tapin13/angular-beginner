import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppComponent, App2Component, App3Component, App4Component } from "./index";

@NgModule({
    declarations: [
        AppComponent,
        App2Component,
        App3Component,
        App4Component
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class MyHTTPModule {}
