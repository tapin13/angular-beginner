import { Component } from "@angular/core";
import { User } from '../user';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent {
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
