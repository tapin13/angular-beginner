import { Component } from "@angular/core";
import { User } from '../user';

@Component({
    selector: 'app-user-form3',
    templateUrl: './user-form3.component.html',
    styleUrls: [ './user-form3.component.css' ]
})
export class UserForm3Component {
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
