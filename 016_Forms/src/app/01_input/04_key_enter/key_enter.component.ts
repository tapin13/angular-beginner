import { Component } from "@angular/core";

@Component({
    selector: 'app-key_enter',
    templateUrl: './key_enter.component.html'
})
export class KeyEnterComponent {
    public message = '';

    constructor() {}

    onKey(data: string) {
        this.message += data + ' | ';
    }
}
