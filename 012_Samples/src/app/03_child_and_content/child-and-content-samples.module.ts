import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {
    blockComponent,
    BlockHostComponent,
    Block2Component,
    Block2HostComponent,
    ListComponent,
    ListHostComponent,
    ItemComponent,
} from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        blockComponent,
        BlockHostComponent,
        Block2Component,
        Block2HostComponent,
        ListComponent,
        ListHostComponent,
        ItemComponent,
    ]
})
export class ComponentsSamplesModule3 {

}
