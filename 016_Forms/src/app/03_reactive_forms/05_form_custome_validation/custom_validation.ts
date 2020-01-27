import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(control: AbstractControl): { [ key: string ]: any } {
    let emailRegExp = /.*@.*/;
    let value = control.value;
    let numValue = +control.value;

    let result = emailRegExp.test(value);

    if(result) {
        return null;
    } else {
        return { "emailValidator": { value } };
    }
}

export function ageValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [ key: string ]: any } => {
        let value = control.value;
    
        let result = value > 9 && value < 101;
    
        if(result) {
            return null;
        } else {
            return { "ageValidator": { value } };
        }
    }
}


