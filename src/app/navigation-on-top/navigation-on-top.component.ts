import { Component, OnInit } from '@angular/core';
import { NavigationMenuService } from './../navigation-menu.service';

@Component({
  selector: 'app-navigation-on-top',
  templateUrl: './navigation-on-top.component.html',
  styleUrls: ['./navigation-on-top.component.css']
})
export class NavigationOnTopComponent implements OnInit {
  todayDate;
  list;
  newcomponentproperty;
  changeOnServiceCall;

  constructor(private myservice: NavigationMenuService) { }

  ngOnInit() {
    this.todayDate = this.myservice.todayDate;
    this.changeOnServiceCall = this.myservice.serviceproperty;
    console.log(this.todayDate);
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}
