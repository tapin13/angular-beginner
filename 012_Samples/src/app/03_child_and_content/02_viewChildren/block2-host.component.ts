import { Component, QueryList, ViewChildren } from '@angular/core';
import { Block2Component } from './block2.component';

@Component({
    selector: 'block2-host',
    templateUrl: 'block2-host.component.html',
})
export class Block2HostComponent {
    @ViewChildren(Block2Component)
    blocks: QueryList<Block2Component>;

    showAllBlocks() {
        this.blocks.forEach(block => block.show());
    }
}
