import { Component } from '@angular/core';

@Component({
    selector: 'ngclass',
    templateUrl: 'ngclass.component.html',
    styleUrls: [ 'ngclass.component.css' ]
})
export class NgClassComponent {
    settings = {
        accent: true,
        error: true,
        highlighted: false,
    };
}
