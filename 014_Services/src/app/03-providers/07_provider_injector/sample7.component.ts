import { Component, Injector } from '@angular/core';

import { LoggerService } from '../index';

@Component({
    selector: 'sample7',
    templateUrl: 'sample7.component.html',
    providers: [ LoggerService ]
})
export class Sample7Component {
    logger: LoggerService = this.injector.get(LoggerService);

    constructor(private injector: Injector) {
    }

    logMessage() {
        this.logger.log('Option 3');
    }
}
