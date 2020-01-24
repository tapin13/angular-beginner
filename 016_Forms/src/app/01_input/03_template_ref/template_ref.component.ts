import { Component } from "@angular/core";

@Component({
    selector: 'app-template_ref',
    templateUrl: './template_ref.component.html'
})
export class TemplateRefComponent {
    public message = '';

    constructor() {}

    onKey(data: string) {
        this.message += data + ' | ';
    }
}
