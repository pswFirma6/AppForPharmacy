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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'hospitalRegistration', component: HospitalRegistrationComponent },
      { path: 'medications', component: MedicationsComponent },
      { path: 'offers', component: PharmacyOfferComponent },
      { path: 'report', component: ConsumptionReportComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
