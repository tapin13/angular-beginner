import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

import { User } from '../user';
import { emailValidator, ageValidator } from './custom_validation';

@Component({
    selector: 'app-form-control-sample5',
    templateUrl: './form-control-sample5.component.html',
    styleUrls: [ './form-control-sample5.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class FormControlSample5Component implements OnInit {
    userForm: FormGroup;
    user: User = new User();
    roles: string[] = [ "Guest", "Moderator", "Admin" ];

    formErrors = {
        'name': '',
        'email': '',
        'role': '',
        'age': '',
    };

    validationMessages = {
        'name': {
            'required': 'required field',
            'minlength': 'min Length',
            'maxlength': 'max Length'
        },
        'email': {
            'required': 'required field',
            'emailValidator': 'pattern',
        },
        'role': {
            'required': 'required field',
        },
        'age': {
            'required': 'required field',
            'ageValidator': 'range',
        }
    };

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.userForm = this.formBuilder.group({
            'name': [ 
                this.user.name, 
                [ 
                    Validators.required, 
                    Validators.minLength(4), 
                    Validators.maxLength(15) 
                ] 
            ],
            'email': [ 
                this.user.email, 
                [ 
                    Validators.required, 
                    emailValidator
                ] 
            ],
            'role': [ 
                this.user.role, 
                [ 
                    Validators.required 
                ] 
            ],
            'age': [ 
                this.user.age, 
                [ 
                    Validators.required, 
                    ageValidator(10, 100)
                ] 
            ]
        });

        this.userForm.valueChanges.subscribe(data => {
            this.onValueChange(data);
        });

        this.onValueChange();
    }

    onValueChange(data?: any) {
        if(!this.userForm) return;

        let form = this.userForm;

        for(let field in this.formErrors) {
            this.formErrors[field] = '';

            let control = form.get(field);

            if(control && control.dirty && !control.valid) {
                let message  = this.validationMessages[field];
                console.log(message);
                console.log(control.errors);
                for(let key in control.errors) {
                    console.log(key);
                    console.log(message[key]);
                    this.formErrors[field] += message[key] + ' ';
                }
            }
        }

    }

    onSubmit(form) {
        console.log(form.valid);
        console.log(form.value);
    }
}
