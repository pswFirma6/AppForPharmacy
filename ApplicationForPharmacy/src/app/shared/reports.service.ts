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
    readonly url = "http://localhost:44377/prescriptions";
    readonly prescriptionsUr = "http://localhost:44377/getPdf/";

    getPrescriptionFileNames() {
        return this.http.get<string[]>(this.url);
    }

    downloadReport() {
        return this.http.get<FileModel>(this.url);
    }

    displayPdf(name: string){
        return this.http.get(this.prescriptionsUr+name, {responseType:'blob'})
        .subscribe((result: Blob) =>{
            const blob = new Blob([result],{type: "application/pdf"});
            const pdfurl = window.URL.createObjectURL(blob)
            window.open(pdfurl)
            console.log("success")
    
        });

    }

}