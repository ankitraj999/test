import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-notification',
  templateUrl: './org-notification.component.html',
  styleUrls: ['./org-notification.component.css']
})
export class OrgNotificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedOrgId")==null){
      this.router.navigate([''])
    }
  }

}
