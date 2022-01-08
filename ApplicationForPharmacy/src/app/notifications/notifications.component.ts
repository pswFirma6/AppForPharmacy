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
    readNotifications: NotificationsModel[] = []
    unreadNotifications: NotificationsModel[] = []
    pharmacyName: string = "";

    constructor(public service: NotificationsService) { }


    ngOnInit(): void {
        this.service.getNotifications().subscribe(
            res =>{ 
            
            console.log(res)

            for (var val of res) {
                if(val.read)
                this.readNotifications.push(val)
              }
            this.readNotifications.sort((y, x) => +new Date(x.date) - +new Date(y.date));

            for (var val of res) {
                if(!val.read)
                this.unreadNotifications.push(val)
              }
            this.unreadNotifications.sort((y, x) => +new Date(x.date) - +new Date(y.date));
            
            this.notifications = [ ...this.unreadNotifications, ...this.readNotifications];
 
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