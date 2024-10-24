// app.routes.ts
import { Routes } from '@angular/router';
import { loggedInGuard } from './auth/guards/logged-in.guard';
export const routes: Routes = [
  {
    path: 'item',
    loadChildren: () => import('./items/items.routes'),
    canActivate: [loggedInGuard]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.routes') }
];
