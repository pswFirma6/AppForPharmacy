import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/homePage.component';
import { HospitalRegistrationComponent } from './hospitalRegistration/hospitalRegistration.component';
import { MedicationsComponent } from './medications/medications.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { PharmacyOfferFormComponent } from './pharmacy-offer-form/pharmacy-offer-form.component';
import { PharmacyOfferComponent } from './pharmacy-offer/pharmacy-offer.component';
import { PharmacyOffersComponent } from './pharmacy-offers/pharmacy-offers.component';
import { ConsumptionReportComponent } from './consumption-report/consumption-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NotificationComponent } from './notifications/notifications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { NavbarReportsComponent } from './navbar-reports/navbar-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HospitalRegistrationComponent,
    SidebarComponent,
    MedicationsComponent,
    LandingComponent,
    PharmacyOfferFormComponent,
    PharmacyOfferComponent,
    PharmacyOffersComponent,
    ConsumptionReportComponent,
    NotificationComponent,
    PrescriptionsComponent,
    NavbarReportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'hospitalRegistration', component: HospitalRegistrationComponent },
      { path: 'medications', component: MedicationsComponent },
      { path: 'offers', component: PharmacyOfferComponent },
      { path: 'report', component: ConsumptionReportComponent },
      { path: 'notifications', component: NotificationComponent},
      { path: 'prescriptions', component: PrescriptionsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [NotificationComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
