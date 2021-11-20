import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PharmacyModel } from './pharmacy.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PharmacyService {

    formChoosePharmacy: PharmacyModel = {
        pharmacyName : "Our Pharmacy",
        apiKey: "abcdefgh"
    };
    readonly pharmacyBase = "https://localhost:44377/pharmacyNames";
    pharmacyNames: string[] = [];
    
    constructor(private http: HttpClient) {

    }

    getPharmacies(): Observable<string[]>{
        return this.http.get<string[]>(this.pharmacyBase);
    }

}
