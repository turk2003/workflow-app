// budget.routes.ts
import { Routes } from '@angular/router';
import { ItemApprovalComponent } from './pages/item-approval/item-approval.component';
import { ItemFormComponent } from './pages/item-form/item-form.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
export const routes: Routes = [
  { path: 'item-list', component: ItemListComponent, title: 'List' },
  { path: 'item-add', component: ItemFormComponent, title: 'Add' },
  { path: 'item-edit/:id', component: ItemFormComponent, title: 'Edit' },
  { path: 'item-approval', component: ItemApprovalComponent, title: 'Approval' }
];

export default routes;
