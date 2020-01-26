import { Component } from "@angular/core";
import { User } from '../user';

@Component({
    selector: 'app-user-form5',
    templateUrl: './user-form5.component.html',
    styleUrls: [ './user-form5.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css' ]
})
export class UserForm5Component {
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
