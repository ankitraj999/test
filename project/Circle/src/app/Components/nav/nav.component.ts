import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  characters:any[]=[]
  getDataArray:any[]=[]
  constructor(private router:Router,private userservice:UserServicesService) {
   
   }

  ngOnInit() {

    this.userservice.getUser().subscribe(data=>{this.getDataArray=data
      for(let i=0;i<this.getDataArray.length;i++){
        this.characters.push(this.getDataArray[i].firstName+" "+this.getDataArray[i].lastName)
    
      }
    })
   

  }
  logout(){
    console.log("hiankit")
    sessionStorage.removeItem("loggedUserId")
    sessionStorage.removeItem("loggedUserName")
    sessionStorage.removeItem("receiverId")
  }
  onInput(search) {
   // console.log("hi")
    // var val = document.getElementById("search");
    // var opts = document.getElementById('dlist').childNodes;
    // for (var i = 0; i < opts.length; i++) {
    //   if (opts[i] === val) {
    //     // An item was selected from the list!
    //     // yourCallbackHere()
    //     alert(opts[i]);
    //     break;
    //   }
    // }
    for(let i=0;i<this.getDataArray.length;i++){
      if((this.getDataArray[i].firstName+" "+this.getDataArray[i].lastName)==search.value){
           sessionStorage.setItem('viewUserName',this.getDataArray[i].userName)
           this.router.navigate(['viewOtherUser'])
      }
    }
  }

  }



