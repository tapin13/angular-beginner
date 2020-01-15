import { Component } from '@angular/core';

import { LoggerService, Logger2Service } from '../index';

@Component({
    selector: 'sample2',
    templateUrl: 'sample2.component.html',
    providers: [ Logger2Service, {provide: LoggerService, useClass: Logger2Service} ]
})
export class Sample2Component {
    private message: string;

    constructor(private logger: LoggerService) {
    }

    logMessage() {
        this.logger.log(this.message);
    }
}
