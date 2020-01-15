import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Sample1Component, Sample2Component, Sample3Component } from './index';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ Sample1Component, Sample2Component, Sample3Component ],
})
export class ProviderSamplesModule {
}

