import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {
    sample1Component,
    Sample1HostComponent,
    Sample2Component,
    Sample2HostComponent,
    Sample3Component,
    Sample3HostComponent,
} from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        sample1Component,
        Sample1HostComponent,
        Sample2Component,
        Sample2HostComponent,
        Sample3Component,
        Sample3HostComponent,
        ]
})
export class ComponentsSamplesModule2 {

}
