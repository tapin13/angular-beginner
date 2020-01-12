import { Component } from '@angular/core';

@Component({
    selector: 'class_binding',
    templateUrl: 'class_binding.component.html',
    styleUrls: [ 'class_binding.component.css' ],
})
export class ClassBindingComponent {
    allClasses: string = 'accent-border error-text highlighted';
    currentClasses: string = '';

    isAccentBorder: boolean = false;
    isErrorText: boolean = false;
    isHighlighted: boolean = false;

    toggleAllClasses() {
        this.currentClasses = this.currentClasses ? '' : this.allClasses;
    }

    accentBorder() {
        this.isAccentBorder = !this.isAccentBorder;
    }
    errorText() {
        this.isErrorText = !this.isErrorText;
    }
    highlighted() {
        this.isHighlighted = !this.isHighlighted;
    }

}
