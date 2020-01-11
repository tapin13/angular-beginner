import { Component } from '@angular/core';

@Component({
    selector: 'interpolation-smp',
    templateUrl: 'interpolation.component.html',
})
export class InterpolationComponent {
    private _firstName: string;
    private _lastName: string;

    constructor() {
        this._firstName = "Vasia";
        this._lastName = "Pupkin";
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    getFullName(): string {
        return this._firstName + " " + this._lastName;
    }
}
