import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    constructor(private http: HttpClient) {
    }
    readonly url = "https://localhost:44377/consumptionReport";

    downloadReport() {
        return this.http.get(this.url);
    }

}