import { Component } from "@angular/core";

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventsComponent {
    public message = 'start';

    constructor() {}

    clickHandler() {
        this.message = 'clicked';
    }
}
