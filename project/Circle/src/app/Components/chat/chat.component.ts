import { Component, OnInit } from '@angular/core';

import {User, Message} from "src/app/model/user-model"
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:User[]=[];
  msg:Message=new Message()
  receiverId:Number
  senderId=parseInt(sessionStorage.getItem("loggedUserId"));
  messsageArray:Message[]=[]
  displayMsgArray:Message[]=[]
  recentMessages:Message[]=[]
  recentUsers:User[]=[]
  date=new Date()
  constructor(   private router:Router, private userService: UserServicesService
    ) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
    this.getAllData()
   // if(sessionStorage.getItem("loggedUserId")!=undefined){
      this.displayMessage()
   // }
   
  }
  getAllData(){
    this.recentMessages=[]
    this.recentUsers=[]
    this.userService.getUser().subscribe(data =>  {this.user
      =data.filter(u=> u.userName!==sessionStorage.getItem("loggedUserName"))
     this.userService.retriveMsg().subscribe(data => { this.messsageArray=data
      
      for(let msg=this.messsageArray.length-1;msg>=0;msg--){
        for(let u of this.user){
      if( this.recentUsers.indexOf(u)>-1){
        console.log(this.recentUsers.indexOf(u))
        continue
      }
          
          if( (u.id==this.messsageArray[msg].receiver&&parseInt(sessionStorage.getItem("loggedUserId"))==this.messsageArray[msg].sender)||(u.id==this.messsageArray[msg].sender&&parseInt(sessionStorage.getItem("loggedUserId"))==this.messsageArray[msg].receiver) ){
            this.recentMessages.push(this.messsageArray[msg])
            this.recentUsers.push(u)
            break
          }
        }
      }
      console.log(this.recentMessages)
      })
    })
// this.idStore(id)
  }
  idStore(id){

this.receiverId=id
sessionStorage.setItem('receiverId',id)
this.receiverId=parseInt(sessionStorage.getItem("receiverId"))
// this.getAllData()

this.displayMessage()

  }
  sendMsg(message){
    this.msg.msg=message;
    this.msg.sender=parseInt(sessionStorage.getItem("loggedUserId"));
    this.msg.receiver=this.receiverId;
    this.msg.TimeNdate=this.date

this.userService.storeMsg(this.msg).subscribe(data=>{this.idStore(this.receiverId)})
    this.getAllData()
  }


  displayMessage(){
    this.displayMsgArray=[]
this.userService.retriveMsg().subscribe(data=>{this.messsageArray=data;

for(let varMessage of this.messsageArray){
    if((varMessage.sender==this.senderId && varMessage.receiver==this.receiverId)||
    (varMessage.sender==this.receiverId && varMessage.receiver==this.senderId)){
      
      this.displayMsgArray.push(varMessage)
    }
  }

}) 
  
 }

}
