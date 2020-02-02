import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { WikiComponent } from "./index";

@NgModule({
    declarations: [
        WikiComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class WikiModule {}
