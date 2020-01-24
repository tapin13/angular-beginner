import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/auth-guard.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminHomeComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: '',
                        children: [
                            {
                                path: 'phrases',
                                component: ManagePhrasesComponent
                            },
                            {
                                path: 'users',
                                component: ManageUsersComponent
                            },
                            {
                                path: '',
                                redirectTo: 'phrases',
                                pathMatch: 'full'
                            }
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
export class AdminRoutingModule {
}
