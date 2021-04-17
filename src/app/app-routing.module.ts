import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CreateComponent } from './announcement/CUD/create/create.component';
import { UpdateComponent } from './announcement/CUD/update/update.component';
import { DeleteComponent } from './announcement/CUD/delete/delete.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'announcement',
        component: AnnouncementComponent
    },
    {
        path: 'announcement/add',
        component: CreateComponent
    },
    {
        path: 'announcement/update',
        component: UpdateComponent
    },
    {
        path: 'announcement/delete',
        component: DeleteComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
