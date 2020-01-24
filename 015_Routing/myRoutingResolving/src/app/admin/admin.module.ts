import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminHomeComponent,
        ManageUsersComponent,
        ManagePhrasesComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
    ]
})
export class AdminModule {
}
