import { Component, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'sample3',
    templateUrl: 'sample3.component.html',
    inputs: [ 'name', 'value' ]
})
export class Sample3Component implements OnChanges {
    private _name: string;
    private _value: string;

    ngOnChanges(changes: { [ propertyName: string ]: SimpleChange }) {
        let messagesArray: string[] = [];

        for(let propName in changes) {
            messagesArray.push(`property: ${propName}, current value = ${changes[propName].currentValue}, previous value = ${changes[propName].previousValue}`);
        }

        console.log(messagesArray.join(';'));
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}
