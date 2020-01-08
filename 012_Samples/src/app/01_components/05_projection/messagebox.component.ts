import { Component } from '@angular/core';

@Component({
    selector: 'messagebox',
    templateUrl: 'messagebox.component.html',
    styleUrls: [ 'messagebox.component.css' ],
})
export class MessageBoxComponent {
    private _visible: boolean = true;

    hide() {
        this._visible = !this._visible;
    }

    get visible(): boolean {
        return this._visible;
    }
}
