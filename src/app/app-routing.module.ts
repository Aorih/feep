import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m)=> m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import("./register/register.module").then((m)=> m.RegisterModule)
  },
  {
    path: "feed",
    loadChildren: () => import("./feed/feed.module").then( (m) => m.FeedModule)
  },
  {
    path:"**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
