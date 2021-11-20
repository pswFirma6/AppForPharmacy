import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PharmacyOffersService } from '../shared/pharmacyOffers.service';

@Component({
  selector: 'app-pharmacy-offer-form',
  templateUrl: './pharmacy-offer-form.component.html',
  styleUrls: ['./pharmacy-offer-form.component.css']
})
export class PharmacyOfferFormComponent implements OnInit {

  constructor(public service: PharmacyOffersService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.createOffer().subscribe(
        (res) => {
          console.log("Successfuly added to pharmacy base!");
        }
      )
  }

}
