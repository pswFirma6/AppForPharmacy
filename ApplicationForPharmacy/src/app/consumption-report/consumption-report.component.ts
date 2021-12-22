import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NotificationsService } from '../notifications/notifications.service';
import { FileModel } from '../shared/file.model';
import { ReportsService } from '../shared/reports.service';


@Component({
  selector: 'app-consumption-report',
  templateUrl: './consumption-report.component.html',
  styleUrls: ['./consumption-report.component.css']
})
export class ConsumptionReportComponent implements OnInit {

  constructor(public service: ReportsService, public notificationService: NotificationsService) { }
  url: string = "";
  fileName: string = ""

  ngOnInit(): void {
  }

  Download(){

    this.service.downloadReport()
    .subscribe(
      (res:any) => {this.notificationService.newNotification.name = res.name;
      Swal.fire('New file', 'You have new consumption!', 'info')
      .then((result) => {
        if(result.isConfirmed){
          this.setNotification();
          this.notificationService.saveNotification().subscribe(
            (res:any) => {
              location.reload();
            }
          );
        }
      });
     }
    );


  }

  setNotification(){
    this.notificationService.newNotification.title = 'New consumption';
    this.notificationService.newNotification.content = "You have new consumption in your Pharmacy folder";
    var date = new Date().toUTCString();
    this.notificationService.newNotification.date = new Date(date);
    this.notificationService.newNotification.read = false;
  }

}
