import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TenderModel } from '../shared/tender.model';
import { TenderService } from '../shared/tender.service';
import { TenderOfferService } from '../shared/tenderOffer.service';
import { OfferItemModel, TenderOfferModel } from '../shared/tenderOffers.model';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  tenders: TenderModel[] = [];
  offers: TenderOfferModel[] = [];
  offerFormVisibility: boolean[] = [];
  offerVisibility: boolean[] = [];
  shownOffers: TenderOfferModel[] = [];
  availableForOffer: boolean = false;
  offerItemsNames: string[] = [];
  offerItemsQuantities: number[] = [];
  offerItemsPrices: number[] = [];
  offerItems: OfferItemModel[] = [];
  offer: TenderOfferModel = new TenderOfferModel;
  newOffers: TenderOfferModel[] = [];

  constructor(public service: TenderService, public offerService: TenderOfferService) { }

  ngOnInit(): void {
    this.service.getTenders().subscribe(
      (res:any) => this.tenders = res
    );
    this.offerService.getTenderOffers().subscribe(
      (res:any) => this.offers = res
    );
    console.log(this.offers);
    this.offerFormVisibility.length = this.tenders.length;
    this.offerVisibility.length = this.offers.length;
    for(let offerForm of this.offerFormVisibility){
      offerForm = false;
    }
    for(let offer of this.offerVisibility){
      offer = false;
    }
  }

  checkTenderOfferMaking(tenderId: number): boolean{ 
    for(let offer of this.offers){
      if(offer.tenderId == tenderId){
        let offerDate = new Date(offer.creationDate);
        let todayDate = new Date();
        if(offerDate.getDate() == todayDate.getDate() && offerDate.getMonth() == todayDate.getMonth() && offerDate.getFullYear() == todayDate.getFullYear()){
          return false;
        }
      }
    }
    return true;
  }

  checkTenderOfferDisplay(tenderId: number){
    for(let offer of this.offers){
      if(offer.tenderId == tenderId){
        return true;
      }
    }
    return false;
  }

  checkTenderOfferVisibility(tenderId: number){
    for(let offer of this.offers){
      if(offer.tenderId == tenderId && this.offerVisibility[offer.id]){
        return true;
      }
    }
    return false;
  }

  changeOfferFormVisibility(tenderId: number): void {
    this.offerFormVisibility[tenderId] = !this.offerFormVisibility[tenderId];
    for(let tender of this.tenders){
      if(tender.id == tenderId){
        for(let item of tender.tenderItems){
          this.offerItemsNames.push(item.name);
        }
        this.offerItemsQuantities.length = tender.tenderItems.length;
        this.offerItemsPrices.length = tender.tenderItems.length;
      }
    }
  }

  checkEditingOffer(): boolean{
    for(let offer of this.offerFormVisibility){
      if(offer == true){
        return false;
      }
    }
    return true;
  }

  changeOfferVisibility(tenderId: number): void {
    this.shownOffers = [];
    for(let offer of this.offers){
      if(offer.tenderId == tenderId){
        this.offerVisibility[offer.id] = !this.offerVisibility[offer.id];
        this.shownOffers.push(offer);
      }
    }
  }

  checkAvailability(tenderId: number){
    for(let i=0; i < this.offerItemsNames.length; i++){
      let offerItem = new OfferItemModel;
      offerItem.name = this.offerItemsNames[i];
      offerItem.quantity = this.offerItemsQuantities[i];
      offerItem.price = this.offerItemsPrices[i];
      this.offerItems.push(offerItem);
    }
    this.offerService.checkMedicinesForTenderOffer(this.offerItems).subscribe(
      (res:any) => {
        if(res == true){
          this.availableForOffer = res;
          this.offer.tenderId = tenderId;
          this.offer.tenderOfferItems = this.offerItems;
        } else {
          window.alert("We don't have enough items for this offer!")
        }
      }
    );
  }

  postTenderOffer(){
    this.offerService.postTenderOffer(this.offer).subscribe(
      (res:any) => {
        Swal.fire("Your offer is successfully posted!","","success").then((result)=>
        {
          location.reload();
        });
      }
    );
  }

}
