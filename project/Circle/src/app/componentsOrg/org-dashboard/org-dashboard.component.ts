import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-dashboard',
  templateUrl: './org-dashboard.component.html',
  styleUrls: ['./org-dashboard.component.css']
})
export class OrgDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedOrgId")==null){
      this.router.navigate([''])
    }
  }

}
