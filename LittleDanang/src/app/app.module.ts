import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAndGalleryComponent } from './components/form-and-gallery/form-and-gallery.component';
import { TermAndConditionComponent } from './components/term-and-condition/term-and-condition.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApiRouteModule } from './api-routes/api-route/api-route.module';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VisaProvidingComponent } from './components/visa-providing/visa-providing.component';
import { AdminsControllingComponent } from './components/admins-controlling/admins-controlling.component';
import { HistoriesComponent } from './components/histories/histories.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAndGalleryComponent,
    TermAndConditionComponent,
    GalleryModalComponent,
    LoginComponent,
    DashboardComponent,
    VisaProvidingComponent,
    AdminsControllingComponent,
    HistoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiRouteModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
