import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'sample4',
    templateUrl: 'sample4.component.html',
})
export class Sample4Component implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    ngOnChanges() {
        console.log(`ngOnChanges`);
    }

    ngOnInit() {
        console.log(`ngOnInit`);
    }

    ngDoCheck() {
        console.log(`ngDoCheck`);
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit`);
    }

    ngAfterContentChecked() {
        console.log(`ngAfterContentChecked`);
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit`);
    }

    ngAfterViewChecked() {
        console.log(`ngAfterViewChecked`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy`);
    }

    test() {
        console.log(`test run`);
    }

}
