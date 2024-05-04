import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
}
  }


