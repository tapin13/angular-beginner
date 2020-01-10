import { Component } from '@angular/core';

@Component({
    selector: 'block2',
    templateUrl: 'block2.component.html',
})
export class Block2Component {
    private _visible: boolean = false;

    get visible(): boolean {
        return this._visible;
    }

    show() {
        this._visible = true;
    }
}
