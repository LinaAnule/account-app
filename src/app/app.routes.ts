import {Routes} from '@angular/router';
import path from "path";
import {AccountComponent} from "./account/account.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {FAQComponent} from "./faq/faq.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {filterAccessToAccountGuard} from "./guards/filter-access-to-account.guard";
import {AccountListComponent} from "./account-list/account-list.component";

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
  {
    path: 'account/:id',
    component: AccountComponent,
    canActivate: [filterAccessToAccountGuard],
  },
  {
    path: 'accounts',
    component: AccountListComponent
  },
  {
    path: 'accountName/:searchQuery',
    component: AccountListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];
