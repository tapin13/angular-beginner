import { Component } from '@angular/core';

import { LoggerService, Logger2Service } from '../index';

const simpleLogger: any = {
    log: (m) => {
        console.log(`simple logger ${m}`);
    }
}

@Component({
    selector: 'sample3',
    templateUrl: 'sample3.component.html',
    providers: [ {provide: LoggerService, useValue: simpleLogger} ]
})
export class Sample3Component {
    private message: string;

    constructor(private logger: LoggerService) {
    }

    logMessage() {
        this.logger.log(this.message);
    }
}
