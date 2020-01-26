import { Component } from "@angular/core";
import { User } from '../user';

@Component({
    selector: 'app-user-form4',
    templateUrl: './user-form4.component.html',
    styleUrls: [ './user-form4.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class UserForm4Component {
    roles: string[] = [ "Guest", "Moderator", "Admin" ];

    model: User = new User(0, '', '', 0);

    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
