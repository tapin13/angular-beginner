import { Component } from '@angular/core';

@Component({
    selector: 'calc',
    templateUrl: 'calc.component.html',
})
export class CalcComponent {
    x: number = 0;
    y: number = 0;
    result: number;

    calculate() {
        this.result = this.x + this.y;
    }

    reset() {
        this.x = 0;
        this.y = 0;
        this.result = undefined;
    }
}
