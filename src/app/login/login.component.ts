import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Tata';
  loggedIn = true;
  list = ['MLS', 'Entry']
  onSubmit() { 
    console.log("Hey")
    this.loggedIn = false;
    this.router.navigate(['/mlsOrEntry'], {queryParams: this.list});
   }
   constructor(private router: Router) { }

  ngOnInit() {
    console.log('Bhag')
    if( window.location.href === "http://localhost:4200/mlsOrEntry"){
      this.loggedIn = false;
    }
  }

}
