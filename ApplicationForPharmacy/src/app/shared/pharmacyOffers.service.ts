import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PharmacyOfferModel } from "./pharmacyOffer.model";

@Injectable({
    providedIn: 'root'
  })
export class PharmacyOffersService {

    formCreatingNewOffer: PharmacyOfferModel = new PharmacyOfferModel();
    readonly baseUrl = "https://localhost:44377/createOffer";
    constructor(private http: HttpClient) { }

    postLogin(){
      console.log(this.formCreatingNewOffer);
      return this.http.get(this.baseUrl);
    }

    createOffer(){
    }
  }