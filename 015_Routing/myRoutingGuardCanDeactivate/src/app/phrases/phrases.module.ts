import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

import { PhrasesRoutingModule } from './phrases-routing.module';

@NgModule({
    declarations: [
        PhraseDetailsComponent,
        PhraseListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PhrasesRoutingModule,
    ]
})
export class PhrasesModule {
}
