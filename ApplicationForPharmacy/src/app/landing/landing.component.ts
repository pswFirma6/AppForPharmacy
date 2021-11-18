import { Component, OnInit } from '@angular/core';
import { PharmacyModel } from '../shared/pharmacy.model';
import { PharmacyService } from '../shared/pharmacy.service';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  pharmacies: string[] = [];

  constructor(public service: PharmacyService) { 

  }

  ngOnInit(): void {
    this.service.getPharmacies()
      .subscribe(res => this.pharmacies = res);
  }

}
