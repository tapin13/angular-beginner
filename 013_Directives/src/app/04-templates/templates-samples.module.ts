import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    NgIfTemplateComponent,
    NgSwitchTemplateComponent,
    NgForTemplateComponent,
    RefVarTemplateComponent,
} from './index';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        NgIfTemplateComponent,
        NgSwitchTemplateComponent,
        NgForTemplateComponent,
        RefVarTemplateComponent,
    ]
})
export class TemplatesSamplesModule {

}
