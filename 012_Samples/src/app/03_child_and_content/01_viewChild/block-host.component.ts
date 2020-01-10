import { Component, ViewChild } from '@angular/core';
import { blockComponent } from './block.component';

@Component({
    selector: 'block-host',
    templateUrl: 'block-host.component.html',
})
export class BlockHostComponent {
    @ViewChild(blockComponent, {static: false})
    block: blockComponent;

    showBlock() {
        this.block.show();
    }
}
