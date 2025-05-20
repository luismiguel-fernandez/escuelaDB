import { Routes } from '@angular/router';
import { ListDptComponent } from './list-dpt/list-dpt.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { AddDptComponent } from './add-dpt/add-dpt.component';
import { AddMemberComponent } from './add-member/add-member.component';

export const routes: Routes = [
    { path: 'dpt', component: ListDptComponent},
    { path: 'members', component: ListMembersComponent },
    { path: 'addDpt', component: AddDptComponent },
    { path: 'addMember', component: AddMemberComponent},
    { path: '', redirectTo: 'dpt', pathMatch: 'full' },
    { path: '**', component: ListDptComponent }
];
