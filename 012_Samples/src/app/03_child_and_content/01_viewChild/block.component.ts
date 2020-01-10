import { Component } from '@angular/core';

@Component({
    selector: 'block',
    templateUrl: 'block.component.html',
})
export class blockComponent {
    private _visible: boolean = false;

    get visible(): boolean {
        return this._visible;
    }

    show() {
        this._visible = true;
    }
}
