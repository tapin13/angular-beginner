import { Component } from '@angular/core';

@Component({
    selector: 'ngfor',
    templateUrl: 'ngfor.component.html',
})
export class NgForComponent {
    items: string[] = [];

    constructor() {
        for(let i = 0; i < 10; i++) {
            this.items[i] = 'item #' + (i + 1);
        }
    }
}
