import { Component } from "@angular/core";

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

    menuItems: any[] = [
        {
            path: '/medications',
            title: 'MEDICATIONS',
            class: ''
        },
        {
            path: '/hospitalRegistration',
            title: 'REGISTER YOUR HOSPITAL',
            class: ''
        }
    ]
  
    constructor() { }

}