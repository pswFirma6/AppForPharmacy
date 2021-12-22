import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TenderModel } from "./tender.model";

@Injectable({
    providedIn: 'root'
  })
export class TenderService {

    readonly getTendersUrl = "http://localhost:44377/getTenders";

    constructor(private http: HttpClient) { }

    getTenders() : Observable<TenderModel[]>{
        return this.http.get<TenderModel[]>(this.getTendersUrl);
    }


  }