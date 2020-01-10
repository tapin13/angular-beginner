import { Component } from '@angular/core';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
})
export class ItemComponent {
    private _data: number;

    changeData() {
        this._data = new Date().getTime();
    }

    get data(): number {
        return this._data;
    }
}
