import { Component } from '@angular/core';

@Component({
    selector: 'attribute_binding',
    templateUrl: 'attribute_binding.component.html',
})
export class AttributeBindingComponent {
    private _radius: number = 5;
    
    get radius(): number {
        return this._radius;
    }

    increase() {
        this._radius++;
    }

    decrease() {
        this._radius--;
    }
}
