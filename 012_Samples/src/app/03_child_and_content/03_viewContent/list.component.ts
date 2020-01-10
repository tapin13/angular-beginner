import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { ItemComponent } from './item.component';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
})
export class ListComponent implements AfterContentInit {
    private _count: number = 0;

    @ContentChildren(ItemComponent)
    items: QueryList<ItemComponent>;

    ngAfterContentInit() {
        this._count = this.items.length;
        this.items.forEach(item => item.changeData());
    }

    get count(): number {
        return this._count;
    }
}
