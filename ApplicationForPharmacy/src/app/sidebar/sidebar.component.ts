import { AfterViewInit, Component, OnInit } from "@angular/core";
import { NotificationComponent } from "../notifications/notifications.component";
import { NotificationsService } from "../notifications/notifications.service";
import { NotificationsModel } from "../shared/notifications.model";

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit{

    notifications: NotificationsModel[] = []

    exists: boolean = false;
    menuItems: any[] = [
        {
            path: '/notifications',
            title: 'NOTIFICATIONS',
            class:''
        },
        {
            path: '/medications',
            title: 'MEDICATIONS',
            class: ''
        },
        {
            path: '/hospitalRegistration',
            title: 'REGISTER YOUR HOSPITAL',
            class: ''
        },
        {
            path: '/offers',
            title: 'ACTIONS AND BENEFITS',
            class: ''
        },
        {
            path: '/prescriptions',
            title: 'REPORTS',
            class: ''
        }
    ]
  
    constructor(public service: NotificationsService) { }
    ngOnInit(): void {
        this.service.getNotifications().subscribe(
            res =>{ this.notifications = res;
            console.log(res);
            this.exists = this.checkForNewNotifications()}
          );
    }
  
    checkForNewNotifications(): boolean{
        for(let notification of this.notifications){
            if (!notification.read){
                return true;
            }
        }
        return false;
    }
     

    

}