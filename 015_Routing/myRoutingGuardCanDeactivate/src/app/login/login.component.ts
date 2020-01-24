import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    userLogin: string;
    userPassword: string;
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage(null);
    }

    setMessage(message) {
        this.message = message ? message : 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Try to login...';
        this.authService.login(this.userLogin, this.userPassword).subscribe(() => {
            if(this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                this.router.navigate([redirect]);
            } else {
                this.setMessage("Login error");
            }
        });
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() {}
}
