import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-navbar',
  templateUrl: './org-navbar.component.html',
  styleUrls: ['./org-navbar.component.css']
})
export class OrgNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  orgLogout(){
    sessionStorage.removeItem("loggedOrgId")
    sessionStorage.removeItem("loggedOrgName")
  }
}
