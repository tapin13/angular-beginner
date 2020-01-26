import { Component } from "@angular/core";
import { User } from '../user';

@Component({
    selector: 'app-user-form6',
    templateUrl: './user-form6.component.html',
    styleUrls: [ './user-form6.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class UserForm6Component {
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
