import { Component, OnInit } from '@angular/core';
import { TenderService } from '../shared/tender.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  tenders: any[] = [];

  constructor(public service: TenderService) { }

  ngOnInit(): void {
    this.tenders = this.service.tenders;
  }

}
