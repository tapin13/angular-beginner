import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent, DataService } from './index';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ DataListComponent ],
    providers: [ DataService ],
})
export class SimpleServiceModule {
}

