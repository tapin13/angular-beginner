import { Component } from '@angular/core';

@Component({
    selector: 'property_binding',
    templateUrl: 'property_binding.component.html',
})
export class PropertyBindingComponent {
    private _imageSrc: string = '/assets/images/databinding.png';
    private _imageTitle: string = 'Data binding in Angular';
    private _flag: boolean = false;

    get imageSrc(): string {
        return this._imageSrc;
    }
    get imageTitle(): string {
        return this._imageTitle;
    }
    get flag(): boolean {
        return this._flag;
    }
}
