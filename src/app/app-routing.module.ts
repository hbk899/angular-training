import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  },
  {
    path: 'app/home',
    component: HomeComponent
  },
  {
    path: 'app/users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
