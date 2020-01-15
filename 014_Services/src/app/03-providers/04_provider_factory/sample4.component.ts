import { Component } from '@angular/core';

import { LoggerService, Logger3Service } from '../index';

@Component({
    selector: 'sample4',
    templateUrl: 'sample4.component.html',
    providers: [ {
        provide: LoggerService, 
        useFactory: () => {
            return new Logger3Service('test')
        }
    }]
})
export class Sample4Component {
    private message: string;

    constructor(private logger: LoggerService) {
    }

    logMessage() {
        this.logger.log(this.message);
    }
}
