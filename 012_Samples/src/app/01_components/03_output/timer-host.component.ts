import { Component } from '@angular/core';

@Component({
    selector: 'timer-host',
    templateUrl: 'timer-host.component.html',
})
export class TimerHostComponent {
    tickHandler1(value) {
        console.log("Tick handler 1 - " +  value);
    }

    tickHandler2(value) {
        console.log("Tick handler 2 - " +  value);
    }
}
