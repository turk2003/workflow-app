// auth.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotadminComponent } from './pages/notadmin/notadmin.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'notadmin', component: NotadminComponent, title: 'notadmin' }
];

export default routes;
