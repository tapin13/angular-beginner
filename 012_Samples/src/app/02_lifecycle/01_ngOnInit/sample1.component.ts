import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sample1',
    templateUrl: 'sample1.component.html',
    inputs: [ 'name' ]
})
export class sample1Component implements OnInit {
    private _name: string;

    ngOnInit() {
        console.log(this._name + ' initialized');
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}
