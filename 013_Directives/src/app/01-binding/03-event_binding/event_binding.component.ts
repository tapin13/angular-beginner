import { Component } from '@angular/core';

@Component({
    selector: 'event_binding',
    templateUrl: 'event_binding.component.html',
})
export class EventBindingComponent {
    onSave() {
        console.log('save');
    }

    testEvent(event) {
        for(let prop in event) {
            console.log(`prop: ${prop} - ${event[prop]}`);
        }
    }
}
