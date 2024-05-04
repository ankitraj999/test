import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-addjob',
  templateUrl: './org-addjob.component.html',
  styleUrls: ['./org-addjob.component.css']
})
export class OrgAddjobComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedOrgId")==null){
      this.router.navigate([''])
    }
  }

}
