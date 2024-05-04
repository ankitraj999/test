import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-home',
  templateUrl: './org-home.component.html',
  styleUrls: ['./org-home.component.css']
})
export class OrgHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedOrgId")==null){
      this.router.navigate([''])
    }
  }

}
