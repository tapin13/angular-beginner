import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

interface login {
    login: string;
    password: string;
}

@Component({
    selector: 'app-form-control-sample',
    templateUrl: './form-control-sample.component.html',
    styleUrls: [ './form-control-sample.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class FormControlSampleComponent implements OnInit {
    loginForm: FormGroup;

    ngOnInit() {
        this.loginForm = new FormGroup({
            login: new FormControl('user1'),
            password: new FormControl()
        });
    }

    onSubmit(form) {
        console.log(form.valid);
        console.log(form.value);
    }
}
