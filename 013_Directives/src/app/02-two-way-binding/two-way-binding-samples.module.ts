import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    CalcComponent,
    Calc2Component,
} from './index';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        CalcComponent,
        Calc2Component,
    ]
})
export class TwoWayBindingSamplesModule {

}
