import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/phrases',
                pathMatch: 'full'
            },
            {
                path: 'phrases',
                component: PhraseHomeComponent,
                children: [
                    {
                        path: '',
                        component: PhraseListComponent,
                        children: [
                            {
                                path: ':id',
                                component: PhraseDetailsComponent
                            },
                            {
                                path: '',
                                component: PhraseDetailsComponent
                            },
                        ]
                    }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PhrasesRoutingModule {
}
