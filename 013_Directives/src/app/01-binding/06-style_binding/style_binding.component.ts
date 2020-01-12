import { Component } from '@angular/core';

@Component({
    selector: 'style_binding',
    templateUrl: 'style_binding.component.html',
})
export class StyleBindingComponent {
    isHighlighted: boolean = true;

    getDivColor() {
        return "green";
    }

}
