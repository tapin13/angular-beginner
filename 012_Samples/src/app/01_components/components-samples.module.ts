import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {
    BookComponent,
    ChapterComponent,
    CounterHostComponent,
    CounterComponent,
    TimerHostComponent,
    TimerComponent,
    NameCardHostComponent,
    NameCardComponent,
    MessageBoxHostComponent,
    MessageBoxComponent
} from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        BookComponent,
        ChapterComponent,
        CounterHostComponent,
        CounterComponent,
        TimerHostComponent,
        TimerComponent,
        NameCardHostComponent,
        NameCardComponent,
        MessageBoxHostComponent,
        MessageBoxComponent
    ]
})
export class ComponentsSamplesModule {

}
