import { Component } from '@angular/core';

@Component({
    selector: 'namecard',
    templateUrl: 'namecard.component.html',
    inputs: [ "firstName", "lastName" ]
})
export class NameCardComponent {
    firstName: string;
    private _lastName: string;

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get fullName(): string {
        return this._lastName + ' ' + this.firstName;
    }
}
