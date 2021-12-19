export class TenderOfferModel {
    id: number = 0;
    postingDate: string = "";
    offerItems : OfferItemModel[] = [];
    tenderId: number = 0;
}

export class OfferItemModel {
    name: string = "";
    quantity: number = 0;
    price: number = 0;
}