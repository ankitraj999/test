import { Component, OnInit } from "@angular/core";
import { UserServicesService } from "src/app/services/user-services.service";
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators, FormControl} from "@angular/forms"
@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  loginForm:FormGroup
  submitted=false
  User:any[]=[]
  loginResponse = {
    userid: "",
    email: "",
    password: "",
    username:""
  };
  constructor(private formbuilder:FormBuilder,private userservice:UserServicesService,private router:Router) {}

  ngOnInit() {
    // this.userservice.getUser().subscribe(data=>this.User=data)
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,

        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),

      password: new FormControl("", [Validators.required])
    });

  }
  onSubmit() {
    // this.submitted=true
    //  console.log(email.value+" "+password.value)
    // for(let object of this.User){
    //   console.log(object.emailId+" "+object.password)
    //   if(email.value==object.emailId && password.value==object.password){
    //     sessionStorage.setItem('loggedUserId',object.id)
    //     sessionStorage.setItem('loggedUserName',object.userName)
    //    this.router.navigate(['home'])
    // }
    
  // }
//login part

this.submitted = true;
if (this.loginForm.invalid) {
  return;
} else {
  this.userservice.login(this.loginForm.value).subscribe(data => {
    this.loginResponse = data;
    console.log(this.loginResponse);
    if (this.loginResponse.userid) {
      sessionStorage.setItem("loggedUserId", this.loginResponse.userid);
      sessionStorage.setItem('loggedUserName',this.loginResponse.username)
      this.router.navigate(["home"]);
    }
  });  
}
}

}
