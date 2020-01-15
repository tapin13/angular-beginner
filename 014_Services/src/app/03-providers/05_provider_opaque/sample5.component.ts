import { Component, InjectionToken, Inject } from '@angular/core';

let APP_CONFIG = new InjectionToken("app_config");

const config = {
    prop1: "value 1",
    prop2: "value 2"
};

@Component({
    selector: 'sample5',
    templateUrl: 'sample5.component.html',
    providers: [ {
        provide: APP_CONFIG,
        useValue: config
    }]
})
export class Sample5Component {
    config: any;

    constructor(@Inject(APP_CONFIG) config: any) {
        this.config = config;
    }

    logConfigInto() {
        console.log(this.config.prop1);
        console.log(this.config.prop2);
    }
}
