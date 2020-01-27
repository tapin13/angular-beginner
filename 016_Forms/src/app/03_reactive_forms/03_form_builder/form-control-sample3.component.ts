import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

interface login {
    login: string;
    password: string;
}

@Component({
    selector: 'app-form-control-sample3',
    templateUrl: './form-control-sample3.component.html',
    styleUrls: [ './form-control-sample3.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class FormControlSample3Component implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: [ 'user1', Validators.required ],
            password: [ '', [Validators.required, Validators.minLength(7)] ]
        });
    }

    onSubmit(form) {
        console.log(form.valid);
        console.log(form.value);
    }
}
