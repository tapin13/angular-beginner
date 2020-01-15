import { Component, Optional } from '@angular/core';

import { LoggerService } from '../index';

@Component({
    selector: 'sample6',
    templateUrl: 'sample6.component.html',
    // providers: [ LoggerService ]
})
export class Sample6Component {
    constructor(@Optional() private logger: LoggerService) {
    }

    logMessage() {
        if(this.logger) {
            this.logger.log('Option 1');
        } else {
            console.log('Option 2');
        }
    }
}
