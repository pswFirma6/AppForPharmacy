import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-offer',
  templateUrl: './pharmacy-offer.component.html',
  styleUrls: ['./pharmacy-offer.component.css']
})
export class PharmacyOfferComponent implements OnInit {

  newOffer: boolean = false;
  buttonText: string = "Create new offer";

  constructor() { }

  ngOnInit(): void {
  }

  toggleCreateButton(): void { 
    this.newOffer = !this.newOffer;
    if(this.newOffer){
        this.buttonText = "Show all offers";
    } else {
        this.buttonText = "Create new offer";
    }
}

}
