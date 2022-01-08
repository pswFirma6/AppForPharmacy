import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PharmacyOfferModel } from '../shared/pharmacyOffer.model';
import { PharmacyOffersService } from '../shared/pharmacyOffers.service';

@Component({
  selector: 'app-pharmacy-offer-form',
  templateUrl: './pharmacy-offer-form.component.html',
  styleUrls: ['./pharmacy-offer-form.component.css']
})
export class PharmacyOfferFormComponent implements OnInit {

  constructor(public service: PharmacyOffersService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.service.createOffer().subscribe(
        (res) => {
          this.resetForm(form);
          this.toastr.success('Submited successfully!', 'Offer');
          console.log("Successfuly added to pharmacy base!");
        }
      )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formCreatingNewOffer = new PharmacyOfferModel();
  }

}
