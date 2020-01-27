import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { UserFormComponent, UserForm2Component, UserForm3Component, UserForm4Component, UserForm5Component, UserForm6Component, UserForm7Component } from "./index";

@NgModule({
    declarations: [
        UserFormComponent,
        UserForm2Component,
        UserForm3Component,
        UserForm4Component,
        UserForm5Component,
        UserForm6Component,
        UserForm7Component
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class FormModule {}
