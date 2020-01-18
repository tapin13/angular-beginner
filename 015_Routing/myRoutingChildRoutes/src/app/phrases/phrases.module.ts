import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';

@NgModule({
    declarations: [
        PhraseDetailsComponent,
        PhraseListComponent,
        PhraseHomeComponent,
    ],
    imports: [
        CommonModule,
        PhrasesRoutingModule,
    ]
})
export class PhrasesModule {
}
