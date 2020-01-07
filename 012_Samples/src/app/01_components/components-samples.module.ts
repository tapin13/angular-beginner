import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {
    BookComponent,
    ChapterComponent,
    CounterHostComponent,
    CounterComponent,
    TimerHostComponent,
    TimerComponent
} from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        BookComponent,
        ChapterComponent,
        CounterHostComponent,
        CounterComponent,
        TimerHostComponent,
        TimerComponent
    ]
})
export class ComponentsSamplesModule {

}
