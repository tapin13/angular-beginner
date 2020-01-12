import { Component } from '@angular/core';

@Component({
    selector: 'ngif',
    templateUrl: 'ngif.component.html',
})
export class NgIfComponent {
    showUl: boolean = true;

    toggleVisibility() {
        this.showUl = !this.showUl;
    }
}
