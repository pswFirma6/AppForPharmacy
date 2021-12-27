import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HospitalRegistrationService } from "../shared/HospitalRegistration.service";

@Component({
    selector: 'hospitalRegistration',
    templateUrl: './hospitalRegistration.component.html',
    styleUrls: ['./hospitalRegistration.component.css']
})

export class HospitalRegistrationComponent implements OnInit{

    constructor(public service: HospitalRegistrationService) { }


    ngOnInit(): void {
        console.log('hello world');
    }

    onSubmit(form: NgForm){
        this.service.registerHospital().subscribe(
          (res) => {
            console.log("Successfuly registered hospital to database");
            location.reload();
          }
        )
        /*this.service.registerPharmacy().subscribe(
            (res) => {
                console.log("Successfuly registered pharmacy to database");
            }
        );*/
    }

    title: string = "Hospital Registration";
    cities: any[] = [
        {
            name: "Novi Sad"
        },
        {
            name: "Beograd"
        },
        {
            name: "Niš"
        },
        {
            name: "Subotica"
        }
    ]

}