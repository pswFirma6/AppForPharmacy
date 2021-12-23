import { Component, OnInit } from "@angular/core";
import { NotificationsModel } from "../shared/notifications.model";
import { NotificationsService } from "./notifications.service";


@Component({
    selector: 'notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})

export class NotificationComponent implements OnInit{

    notifications: NotificationsModel[] = []
    pharmacyName: string = "";

    constructor(public service: NotificationsService) { }


    ngOnInit(): void {
        this.service.getNotifications().subscribe(
            res =>{ this.notifications = res;
            console.log(res);
            }
          );
        this.service.getPharmacyName().subscribe(
            res =>{this.pharmacyName = res[0]
            console.log()}
        )
    }

    

    readMessage(notification: NotificationsModel){
        this.service.updateNotification(notification).subscribe(
            res=>{location.reload()}
        )
    }
}