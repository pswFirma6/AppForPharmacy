import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HospitalRegistrationModel } from './hospitalRegistration.model';
import { PharmacyService } from './pharmacy.service';

@Injectable({
    providedIn: 'root'
  })
export class HospitalRegistrationService {

    formHospitalRegistration: HospitalRegistrationModel = new HospitalRegistrationModel();
    readonly baseUrl = "https://localhost:44377/registerHospital";
    readonly baseUrl2 = "https://localhost:44317/api/Feedbacks/registerPharmacy";
    constructor(private http: HttpClient, public service: PharmacyService) { }

    postLogin(){
        this.formHospitalRegistration.pharmacyName = this.service.formChoosePharmacy.pharmacyName;
        console.log(this.formHospitalRegistration);
        return this.http.post(this.baseUrl,this.formHospitalRegistration);
    }

    registerPharmacy(){
      this.formHospitalRegistration.pharmacyName = this.service.formChoosePharmacy.pharmacyName;
      console.log(this.service.formChoosePharmacy.pharmacyName);
      return this.http.post(this.baseUrl2, this.service.formChoosePharmacy);
    }
  }
