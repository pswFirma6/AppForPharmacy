export class TenderOfferModel {
    id: number = 0;
    tenderId: number = 0;
    pharmacyName: string = "";
    tenderOfferItems : OfferItemModel[] = [];
    hospitalApiKey : string = "";
    creationDate : string = "";
}

export class OfferItemModel {
    name: string = "";
    quantity: number = 0;
    price: number = 0;
    tenderOfferId: number = 0;
}