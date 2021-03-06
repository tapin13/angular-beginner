import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseDetailsResolve } from './phrase-details-resolve.service';

@NgModule({
    declarations: [
        PhraseDetailsComponent,
        PhraseListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PhrasesRoutingModule,
    ],
    providers: [PhraseDetailsResolve]
})
export class PhrasesModule {
}
