import { Component, OnInit } from '@angular/core';
import { PharmacyOfferModel } from '../shared/pharmacyOffer.model';

@Component({
  selector: 'app-pharmacy-offers',
  templateUrl: './pharmacy-offers.component.html',
  styleUrls: ['./pharmacy-offers.component.css']
})
export class PharmacyOffersComponent implements OnInit {

  offers: PharmacyOfferModel[] = [
    {
      title: 'Offer1',
      content: 'Offer content',
      startDate: '11.11.2021.',
      endDate: '30.11.2021'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
