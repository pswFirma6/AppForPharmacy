import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRegistrationModel } from './hospitalRegistration.model';
import { PharmacyService } from './pharmacy.service';

@Injectable({
    providedIn: 'root'
  })
export class HospitalRegistrationService {

    formHospitalRegistration: HospitalRegistrationModel = new HospitalRegistrationModel();
    readonly pharmacyBaseUrl = "https://localhost:44377/registerHospital";
    readonly hospitalBaseUrl = "https://localhost:44317/registerPharmacy";
    pharmacyName: string = "Our Phamracy";

    constructor(private http: HttpClient, public service: PharmacyService) { }

    registerHospital(){
        console.log(this.formHospitalRegistration);
        return this.http.post(this.pharmacyBaseUrl,this.formHospitalRegistration);
    }

    registerPharmacy(){
      return this.http.post(this.hospitalBaseUrl, this.service.formChoosePharmacy);
    }
  }
