import { Component } from '@angular/core';

import { LoggerService, Logger2Service } from '../index';

@Component({
    selector: 'sample1',
    templateUrl: 'sample1.component.html',
    providers: [ {provide: LoggerService, useClass: LoggerService} ]
    // providers: [ {provide: LoggerService, useClass: Logger2Service} ]
})
export class Sample1Component {
    private message: string;

    constructor(private logger: LoggerService) {
    }

    logMessage() {
        this.logger.log(this.message);
    }
}
