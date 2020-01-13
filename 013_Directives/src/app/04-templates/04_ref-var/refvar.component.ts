import { Component } from '@angular/core';

@Component({
    selector: 'refvar',
    templateUrl: 'refvar.component.html',
})
export class RefVarTemplateComponent {
    result: number;

    calc(x, y) {
        this.result = +x + +y;
    }
}