// budget.routes.ts
import { Routes } from '@angular/router';
import { canDeactivateGuard } from '../auth/guards/can-deactivate.guard';
import { rolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../auth/models/logged-in-user';
import { ItemApprovalComponent } from './pages/item-approval/item-approval.component';
import { ItemFormComponent } from './pages/item-form/item-form.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
export const routes: Routes = [
  { path: 'item-list', component: ItemListComponent, title: 'List' },
  {
    path: 'item-add',
    component: ItemFormComponent,
    title: 'Add',
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'item-edit/:id',
    component: ItemFormComponent,
    title: 'Edit',
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'item-approval',
    component: ItemApprovalComponent,
    title: 'Approval',
    canActivate: [rolesGuard([Role.ADMIN, Role.MANAGER])]
  }
];

export default routes;
