import { Component } from "@angular/core";

@Component({
    selector: 'app-events',
    templateUrl: './events_object.component.html'
})
export class EventsObjectComponent {
    public message = 'start';

    constructor() {}

    onKey(event: KeyboardEvent) {
        this.message = (event.target as HTMLInputElement).value + '|';
    }

    // typeless option
    // onKey(event: any) {
    //     this.message = event.target.value + '|';
    // }
}
