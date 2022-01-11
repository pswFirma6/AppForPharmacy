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
    readonly prescriptionsUr = "http://localhost:44377/getPrescriptionPdf/";
    readonly urll = "http://localhost:44377/specifications";
    readonly specUrl = "http://localhost:44377/getSpecificationPdf/";

    getPrescriptionFileNames() {
        return this.http.get<string[]>(this.url);
    }

    getSpecFileNames() {
        return this.http.get<string[]>(this.urll);
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

    displaySpecPdf(name: string){
        return this.http.get(this.specUrl+name, {responseType:'blob'})
        .subscribe((result: Blob) =>{
            const blob = new Blob([result],{type: "application/pdf"});
            const pdfurl = window.URL.createObjectURL(blob)
            window.open(pdfurl)
            console.log("success")
    
        });

    }

}