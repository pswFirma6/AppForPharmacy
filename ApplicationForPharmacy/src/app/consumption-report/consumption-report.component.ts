import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../shared/reports.service';

@Component({
  selector: 'app-consumption-report',
  templateUrl: './consumption-report.component.html',
  styleUrls: ['./consumption-report.component.css']
})
export class ConsumptionReportComponent implements OnInit {

  constructor(public service: ReportsService) { }
  url: string = "";
  ngOnInit(): void {
  }

  Download(){

    this.service.downloadReport()
    .subscribe();
  }

}
