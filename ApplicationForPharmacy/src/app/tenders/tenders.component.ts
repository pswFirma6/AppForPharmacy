import { Component, OnInit } from '@angular/core';
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
  shownOffer: TenderOfferModel = new TenderOfferModel;
  availableForOffer: boolean = false;
  offerItemsNames: string[] = [];
  offerItemsQuantities: number[] = [];
  offerItemsPrices: number[] = [];
  offerItems: OfferItemModel[] = [];
  offer: TenderOfferModel = new TenderOfferModel;
  newOffers: TenderOfferModel[] = [];

  constructor(public service: TenderService, public offerService: TenderOfferService) { }

  ngOnInit(): void {
    this.tenders = this.service.tenders;
    this.offers = this.offerService.offers;
    this.offerFormVisibility.length = this.tenders.length;
    this.offerVisibility.length = this.offers.length;
    for(let offerForm of this.offerFormVisibility){
      offerForm = false;
    }
    for(let offer of this.offerVisibility){
      offer = false;
    }
    /*for(let i=0; i<this.tenders.length; i++){
      this.newOffers[i].tenderId = this.tenders[i].id;
      this.newOffers[i].offerItems.length = this.tenders[i].tenderItems.length;
      for(let j=0; j<this.tenders[i].tenderItems.length; j++){
        this.newOffers[i].offerItems[j].name = this.tenders[i].tenderItems[j].name;
      }
    }*/
  }

  checkTenderOffer(tenderId: number): boolean{
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
        //this.offerItems.length = tender.tenderItems.length;
      }
    }
  }

  checkEdingOffer(): boolean{
    for(let offer of this.offerFormVisibility){
      if(offer == true){
        return false;
      }
    }
    return true;
  }

  changeOfferVisibility(tenderId: number): void {
    for(let offer of this.offers){
      if(offer.tenderId == tenderId){
        this.offerVisibility[offer.id] = !this.offerVisibility[offer.id];
        this.shownOffer = offer;
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
    console.log(this.offerItems);
    this.availableForOffer = true;
    this.offer.tenderId = tenderId;
    /*return this.service.checkMedicine(this.availability).subscribe(
      (res:any) => {this.availableForOffer = res; 
      if(!this.availableForOffer){
        window.alert("Your pharmacy doesn't have enought resources for this offer!");
      }}
    );*/
  }

  postTenderOffer(){

  }

}
