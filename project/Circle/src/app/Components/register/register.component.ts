import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/model/userProfile';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup; 
  userProfile=new UserProfile()
  submitted: boolean = false;

  message: string;

  flag: boolean;
  registeredUser: any;

  constructor(private userservice: UserServicesService, private router: Router) {}

  ngOnInit() {
    this.regForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      userName: new FormControl("", [
        Validators.required
        
      ]),

      email: new FormControl("", [
        Validators.required,

        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),

      password: new FormControl("", [Validators.required])
    });
  }

  register(confirmPassword) {
    this.message = "";
    this.submitted = true;

    if (this.regForm.invalid) {
      return;
    }

    this.flag = false;

    if (this.regForm.value.password == confirmPassword) {
      this.userservice.register(this.regForm.value).subscribe(data => {
        this.registeredUser = data;
        console.log(this.registeredUser);
        if (this.registeredUser._id) {
          this.userProfile.userId=this.registeredUser._id
          this.userProfile.firstName=this.registeredUser.firstName
          this.userProfile.lastName=this.registeredUser.lastName
          this.userProfile.email=this.registeredUser.email
          this.userProfile.userName=this.registeredUser.userName


          this.userservice.creatProfile(this.userProfile).subscribe(data=>{})
          alert("Successfully Registered");
          this.router.navigate(["userlogin"]);
        }
         else if (this.registeredUser.email) {
          alert(this.registeredUser.email);
        }
      });
    } else {
      this.message = "Password not matching..! \n Please confirm password";

      this.flag = true;
    }
  }
}
