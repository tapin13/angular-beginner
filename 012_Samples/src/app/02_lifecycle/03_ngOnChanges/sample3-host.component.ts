import { Component } from '@angular/core';

@Component({
    selector: 'sample3-host',
    templateUrl: 'sample3-host.component.html',
})
export class Sample3HostComponent {
    private _nameValue: string = '';
    private _counter: number = 0;

    get nameValue(): string {
        return this._nameValue;
    }

    get counter(): number {
        return this._counter;
    }

    increment() {
        this._counter++;
    }

    changeName() {
        this._nameValue = "current " + Date.now();
    }

    changeBoth() {
        this._nameValue = "current " + Date.now();
        this._counter++;
    }
}
