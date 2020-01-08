import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'sample2',
    templateUrl: 'sample2.component.html',
    inputs: [ 'value' ]
})
export class Sample2Component implements OnChanges {
    private _value: string;

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}
