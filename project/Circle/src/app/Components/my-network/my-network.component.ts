import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css']
})
export class MyNetworkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
  }

}
