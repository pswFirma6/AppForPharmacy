export class TenderModel {
    id: number = 0;
    creationDate: string = "";
    startDate: string = "";
    endDate: string = "";
    tenderItems : TenderItemsModel[] = [];
}

export class TenderItemsModel {
    name: string = "";
    quantity: number = 0;
}