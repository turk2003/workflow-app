// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'item', loadChildren: () => import('./items/items.routes') },
  { path: 'auth', loadChildren: () => import('./auth/auth.routes') }
];
