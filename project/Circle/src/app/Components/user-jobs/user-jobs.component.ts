import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.css']
})
export class UserJobsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
  }
 jobs=['analyst','SE','SE2','senior analyst']
}
