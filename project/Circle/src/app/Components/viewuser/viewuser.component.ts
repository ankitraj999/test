import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  getUserData:any[]=[]
  getUserName:any[]=[]
  constructor(private userservice:UserServicesService) { }

  ngOnInit() {
    this.userservice.getUserDetials().subscribe(data=>{this.getUserData=data.filter(u=>u.userName==sessionStorage.getItem('viewUserName'))})
    this.userservice.getUser().subscribe(data=>{this.getUserName=data.filter(u=>u.userName==sessionStorage.getItem('viewUserName'))
    
  })

    
  }
}
