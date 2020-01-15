import { Component, ReflectiveInjector } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'sample8',
    templateUrl: 'sample8.component.html',
})
export class Sample8Component {
    logMessage() {
        let injector = ReflectiveInjector.resolveAndCreate([LoggerService]);
        let logger = injector.get(LoggerService);
        logger.log("Hello!!!");
    }
}
