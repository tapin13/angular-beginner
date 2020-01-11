import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {
    InterpolationComponent,
    PropertyBindingComponent,
} from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        InterpolationComponent,
        PropertyBindingComponent,
    ]
})
export class BindingSamplesModule {

}
