import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  experienceForm:FormGroup;
  submitted:boolean=false

  constructor(private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
    this.experienceForm = new FormGroup({
      companyName: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),

      location: new FormControl("", [
        Validators.required
      ]),
       startYear: new FormControl("", [
        Validators.required
       ] ),
       endYear: new FormControl("", [
        Validators.required
       ] ),
       designation: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Z][a-z]+")
      ]),
      jobDetails: new FormControl("", [
        Validators.required
      ])
  })

  }
  onSubmit(){
    this.submitted=true
    
    
  }
}
