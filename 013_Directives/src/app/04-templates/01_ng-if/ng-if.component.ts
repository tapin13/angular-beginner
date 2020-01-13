import { Component } from '@angular/core';

@Component({
    selector: 'ng-if',
    templateUrl: 'ng-if.component.html',
})
export class NgIfTemplateComponent {
    isVisible: boolean = true;

    hide() {
        this.isVisible = false;
    }
}