import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TenderModel } from "./tender.model";
import { TenderOfferModel } from "./tenderOffers.model";

@Injectable({
    providedIn: 'root'
  })
export class TenderOfferService {

    offers : TenderOfferModel [] = [
        {
            "id" : 1,
            "postingDate" : "18.12.2021.",
            "offerItems" : [
                {
                    "name": "Brufen",
                    "quantity": 10,
                    "price": 200
                },
                {
                    "name": "Aspirin",
                    "quantity": 10,
                    "price": 500
                }
            ],
            "tenderId": 1
        },
        {
            "id" : 1,
            "postingDate" : "18.12.2021.",
            "offerItems" : [
                {
                    "name": "Brufen",
                    "quantity": 20,
                    "price": 200
                },
                {
                    "name": "Aspirin",
                    "quantity": 10,
                    "price": 500
                }
            ],
            "tenderId": 3
        }
    ]

    constructor(private http: HttpClient) { }


  }