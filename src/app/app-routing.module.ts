import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { GuestentryComponent } from './guestentry/guestentry.component';
import { LoginComponent } from './login/login.component';
import { UpdateGuestEntryComponent } from './update-guest-entry/update-guest-entry.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'guestEntryForm', component: GuestentryComponent },
  { path: 'adminPage', component: AdminComponent },
  { path: 'update-guest-entry/:id', component: UpdateGuestEntryComponent },
  { path: 'guestPage/:id', component: GuestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
