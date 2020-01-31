import { FormAndGalleryComponent } from '../components/form-and-gallery/form-and-gallery.component';
import { TermAndConditionComponent } from '../components/term-and-condition/term-and-condition.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { VisaProvidingComponent } from '../components/visa-providing/visa-providing.component';
import { HistoriesComponent } from '../components/histories/histories.component';
import { AdminsControllingComponent } from '../components/admins-controlling/admins-controlling.component';

export const route: Routes = [
  { path: 'form-and-gallery', component: FormAndGalleryComponent },
  { path: 'term-and-condition', component: TermAndConditionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: HistoriesComponent },
  { path: 'visa', component: VisaProvidingComponent },
  { path: 'admin', component: AdminsControllingComponent },
  { path: 'history', component: HistoriesComponent },
  { path: '', redirectTo: '/form-and-gallery', pathMatch: 'full' },

  // { path: '', component: FormAndGalleryComponent },
]
