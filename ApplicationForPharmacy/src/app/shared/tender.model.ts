export class TenderModel {
    id: number = 0;
    creationDate: string = "";
    startDate: string = "";
    endDate: string = "";
    tenderItems : TenderItemsModel[] = [];
    hospitalApiKey : string = "";
    hospitalTenderId : number = 0;
}

export class TenderItemsModel {
    name: string = "";
    quantity: number = 0;
}