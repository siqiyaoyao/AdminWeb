import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [
  { path: '' ,redirectTo:'/login', pathMatch:'full'},//normal
 // { path: '' ,redirectTo:'/home/role', pathMatch:'full'},// test
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: '', component: LoginComponent},
  { path: 'amap', component: PrototypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
