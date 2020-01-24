import { Component } from "@angular/core";

@Component({
    selector: 'app-blur',
    templateUrl: './blur.component.html'
})
export class BlurComponent {
    public message = '';

    constructor() {}

    onKey(data: string) {
        this.message += data + ' | ';
    }
}
