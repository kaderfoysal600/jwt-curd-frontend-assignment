import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AuthGuard } from './guard/auth.guard';
import { AlluserComponent } from './alluser/alluser.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regestar', component: RegesterComponent },
  { path: 'all-user', component: AlluserComponent },
  {
    path: 'dashboard',
    component: UserlistComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
