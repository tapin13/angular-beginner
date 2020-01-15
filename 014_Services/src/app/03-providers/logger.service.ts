import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    messages: string[] = [];

    log(message: string) {
        this.messages.push(message);
        console.log(message);
    }

}