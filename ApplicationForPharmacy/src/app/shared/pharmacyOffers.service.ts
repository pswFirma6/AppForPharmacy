import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PharmacyOfferModel } from "./pharmacyOffer.model";

@Injectable({
    providedIn: 'root'
  })
export class PharmacyOffersService {

    formCreatingNewOffer: PharmacyOfferModel = new PharmacyOfferModel();

    constructor(private http: HttpClient) { }

    postLogin(){
    }

    createOffer(){
    }
  }