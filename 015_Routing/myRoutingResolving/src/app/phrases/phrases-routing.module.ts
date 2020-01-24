import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard';
import { PhraseDetailsResolve } from './phrase-details-resolve.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'phrases', component: PhraseListComponent
            },
            {
                path: 'phrases/:id',
                component: PhraseDetailsComponent,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                    phrase: PhraseDetailsResolve
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PhrasesRoutingModule {
}
