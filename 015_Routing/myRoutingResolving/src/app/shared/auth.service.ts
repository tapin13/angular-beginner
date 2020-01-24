import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    login(login: string, password: string) {
        return of(true).pipe(
            delay(2000),
            tap(val => {
                if(login === 'admin' && password === 'qwerty') {
                    this.isLoggedIn = true;
                    return this.isLoggedIn;
                }
            })
        );
    }

    logout() {
        this.isLoggedIn = false;
    }
}
