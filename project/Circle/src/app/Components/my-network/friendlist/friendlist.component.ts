import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../../services/user-services.service';
import { Message } from 'src/app/model/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {
  userDetails:any[]=[]
  currentUserDetail:any;
  friendArray:any[]=[]
  friendDetails:any[]=[]
  userSignupArray:any[]=[]
  msg:Message=new Message()
  date=new Date()
  constructor(private userservice:UserServicesService,private router:Router) { }

  ngOnInit() {
     this.userservice.getUserDetials().subscribe(data=>{this.userDetails=data
     
    this.currentUserDetail=this.userDetails.filter(u=>u.id==sessionStorage.getItem("loggedUserId"))
    // console.log(this.currentUserDetail[0].id)
    this.friendArray=this.currentUserDetail[0].friends
    for(let index of this.friendArray){
    for(let object of this.userDetails){
      if(index==object.id){
        this.friendDetails.push(object)
      }
    }}
    console.log(this.friendDetails)
    this.userservice.getUser().subscribe(data=>{this.userSignupArray=data
      for(let obj of this.friendDetails){
        for(let obj2 of this.userSignupArray){
          if(obj.userName==obj2.userName){
            this.userSignupArray.push(obj2.firstName+" "+obj2.lastName)
          }
        }
        
      }
      
      })
      console.log('hi')
    })

  
  }
 messageFunction(id){
   console.log(id);
   sessionStorage.setItem("receiverId",id)
   this.msg.msg="";
   this.msg.sender=parseInt(sessionStorage.getItem("loggedUserId"));
   this.msg.receiver=parseInt(sessionStorage.getItem("receiverId"))
   this.msg.TimeNdate=this.date
   this.userservice.storeMsg(this.msg).subscribe()
   this.router.navigate(['/chat'])

 }

}
