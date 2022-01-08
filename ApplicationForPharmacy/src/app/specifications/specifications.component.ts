import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../shared/reports.service';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {

  constructor(public service: ReportsService) { }

  prescriptions: string[] = []

  ngOnInit(): void{
    this.service.getSpecFileNames().subscribe(
      res  => this.prescriptions = res
    );
  }

  OpenSpecPdf(prescription: string){
    console.log('hit')
    this.service.displaySpecPdf(prescription.substring(95));
  }

}
