import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-form7',
    templateUrl: './user-form7.component.html',
    styleUrls: [ './user-form7.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class UserForm7Component implements AfterViewInit {
    roles: string[] = [ "Guest", "Moderator", "Admin" ];

    model: User = new User(0, '', '', 0);

    submitted: boolean = false;

    formErrors = {
        'name': '',
        'age': ''
    };

    validationMessages = {
        "name": {
            'required': 'Field Name is required',
            'minlength': 'Field Name min length 4'
        },
        "age": {
            'required': 'Field Age is required',
        }
    };

    @ViewChild('userForm', {static: false}) userForm: NgForm;

    ngAfterViewInit() {
        this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if(!this.userForm) {
            return;
        }

        let form = this.userForm.form;

        for(let field in this.formErrors) {
            this.formErrors[field] = '';

            let control = form.get(field);

            if(control && control.dirty && !control.valid) {
                let message  = this.validationMessages[field];
                for(let key in control.errors) {
                    this.formErrors[field] += message[key] + ' ';
                }
            }
        }
    }

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
