import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PharmacyOfferModel } from "./pharmacyOffer.model";

@Injectable({
    providedIn: 'root'
  })
export class PharmacyOffersService {

    formCreatingNewOffer: PharmacyOfferModel = new PharmacyOfferModel();
    readonly pharmacyBaseUrl = "https://localhost:44377/addOffer";

    constructor(private http: HttpClient) { }

    addOffer(){
      return this.http.post(this.pharmacyBaseUrl, this.formCreatingNewOffer);
    }

    createOffer(){
    }
  }