import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface login {
    login: string;
    password: string;
}

@Component({
    selector: 'app-form-control-sample2',
    templateUrl: './form-control-sample2.component.html',
    styleUrls: [ './form-control-sample2.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class FormControlSample2Component implements OnInit {
    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = new FormGroup({
            login: new FormControl('user1', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(7)])
        });
    }

    onSubmit(form) {
        console.log(form.valid);
        console.log(form.value);
    }
}
