import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html',
    inputs: [ 'name' ]
})
export class CounterComponent {
    name: string = 'default name';

    @Input()
    counterValue: number = 0;

    @Input('step')
    counterStep: number = 1;

    increment() {
        this.counterValue = this.counterValue + this.counterStep;
    }
}
