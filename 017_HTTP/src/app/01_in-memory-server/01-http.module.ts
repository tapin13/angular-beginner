import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppComponent, App2Component } from "./index";

@NgModule({
    declarations: [
        AppComponent,
        App2Component
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class MyHTTPModule {}
