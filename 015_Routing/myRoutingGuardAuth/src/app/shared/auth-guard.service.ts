import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // let value = false;
        // console.log('AuthGuard can activate return ' + value);

        // return value;

        if(this.authService.isLoggedIn) {
            return true;
        } else {
            this.authService.redirectUrl = state.url;

            this.router.navigate(['/login']);
            return false;
        }
    }
}
