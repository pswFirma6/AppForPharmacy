import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../shared/reports.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {

  constructor(public service: ReportsService) { }

  prescriptions: string[] = []

  ngOnInit(): void{
    this.service.getPrescriptionFileNames().subscribe(
      res  => this.prescriptions = res
    );
  }

  OpenPdf(prescription: string){
    console.log('hit')
    this.service.displayPdf(prescription.substring(78));
  }

}
