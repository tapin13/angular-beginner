import { Component } from '@angular/core';

@Component({
    selector: 'ngstyle',
    templateUrl: 'ngstyle.component.html',
})
export class NgStyleComponent {
    getStyles() {
        let styles = {
            "background-color": "lightyellow",
            "font-family": "monospace",
            "font-weight": "bold",
        };

        return styles;
    }
}
