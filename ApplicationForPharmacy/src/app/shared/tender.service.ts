import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TenderModel } from "./tender.model";

@Injectable({
    providedIn: 'root'
  })
export class TenderService {

    tenders : TenderModel [] = [
        {
            "id" : 1,
            "creationDate" : "18.12.2021.",
            "startDate" : "18.12.2021.",
            "endDate" : "01.01.2022.",
            "tenderItems" : [
                {
                    "name": "Brufen",
                    "quantity": 20
                },
                {
                    "name": "Aspirin",
                    "quantity": 10
                },
                {
                    "name": "Hemoglobin",
                    "quantity": 10
                }
            ]
        },
        {
            "id" : 2,
            "creationDate" : "18.12.2021.",
            "startDate" : "23.12.2021.",
            "endDate" : "01.03.2022.",
            "tenderItems" : [
                {
                    "name": "Andol",
                    "quantity": 20
                },
                {
                    "name": "Bensedin",
                    "quantity": 10
                }
            ]
        }
    ]

    constructor(private http: HttpClient) { }


  }