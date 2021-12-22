import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TenderModel } from "./tender.model";
import { OfferItemModel, TenderOfferModel } from "./tenderOffers.model";

@Injectable({
    providedIn: 'root'
  })
export class TenderOfferService {

    readonly getTenderOffersUrl = "http://localhost:44377/getTenderOffers";
    readonly checkMedicinesUrl = "http://localhost:44377/checkOfferItemsAvailability";
    readonly postTenderOfferUrl = "http://localhost:44377/postTenderOffer";

    constructor(private http: HttpClient) { }

    getTenderOffers() : Observable<TenderOfferModel[]> {
        return this.http.get<TenderOfferModel[]>(this.getTenderOffersUrl);
    }

    checkMedicinesForTenderOffer(offerItems: OfferItemModel[]) {
        return this.http.post(this.checkMedicinesUrl, offerItems);
    }

    postTenderOffer(offer: TenderOfferModel) {
        return this.http.post(this.postTenderOfferUrl, offer);
    }


  }