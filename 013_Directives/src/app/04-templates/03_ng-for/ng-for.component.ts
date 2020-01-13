import { Component } from '@angular/core';

@Component({
    selector: 'ng-for',
    templateUrl: 'ng-for.component.html',
})
export class NgForTemplateComponent {
    items: string[] = [];

    constructor() {
        for(let i = 0; i < 10; i++) {
            this.items[i] = 'item #' + (i + 1);
        }
    }
}