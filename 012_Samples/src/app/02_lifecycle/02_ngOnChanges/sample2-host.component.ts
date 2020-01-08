import { Component } from '@angular/core';

@Component({
    selector: 'sample2-host',
    templateUrl: 'sample2-host.component.html',
})
export class Sample2HostComponent {
    private _counter: number = 0;

    get counter(): number {
        return this._counter;
    }

    increment() {
        this._counter++;
    }
}
