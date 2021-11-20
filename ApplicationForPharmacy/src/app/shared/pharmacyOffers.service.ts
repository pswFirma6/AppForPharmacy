import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PharmacyOfferModel } from "./pharmacyOffer.model";

@Injectable({
    providedIn: 'root'
  })
export class PharmacyOffersService {

    formCreatingNewOffer: PharmacyOfferModel = new PharmacyOfferModel();
    readonly addOfferUrl = "https://localhost:44377/addOffer";
    readonly getOffersUrl = "https://localhost:44377/getOffers";

    constructor(private http: HttpClient) { }

    createOffer(){
      return this.http.post(this.addOfferUrl, this.formCreatingNewOffer);
    }

    getOffers() : Observable<PharmacyOfferModel[]>{
      return this.http.get<PharmacyOfferModel[]>(this.getOffersUrl);
    }

  }