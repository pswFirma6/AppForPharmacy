import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from './file.model';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    constructor(private http: HttpClient) {
    }
    readonly url = "https://localhost:44377/consumptionReport";

    downloadReport() {
        return this.http.get<FileModel>(this.url);
    }

}