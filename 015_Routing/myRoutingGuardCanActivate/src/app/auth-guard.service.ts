import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        let value = false;
        console.log('AuthGuard can activate return ' + value);

        return value;
    }
}
