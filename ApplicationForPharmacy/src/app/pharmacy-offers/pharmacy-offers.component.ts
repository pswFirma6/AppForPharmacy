import { Component, OnInit } from '@angular/core';
import { PharmacyOfferModel } from '../shared/pharmacyOffer.model';
import { PharmacyOffersService } from '../shared/pharmacyOffers.service';

@Component({
  selector: 'app-pharmacy-offers',
  templateUrl: './pharmacy-offers.component.html',
  styleUrls: ['./pharmacy-offers.component.css']
})
export class PharmacyOffersComponent implements OnInit {

  offers: PharmacyOfferModel[] = [];

  constructor(public service: PharmacyOffersService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(
      res => this.offers = res
    );
  }

}
