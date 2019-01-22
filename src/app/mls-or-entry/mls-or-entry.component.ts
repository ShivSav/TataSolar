import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { PlatformLocation } from '@angular/common'
import { NavigationMenuService } from './../navigation-menu.service';
import{NavigationOnTopComponent} from './../navigation-on-top/navigation-on-top.component';
@Component({
  providers:[NavigationOnTopComponent],
  selector: 'app-mls-or-entry',
  templateUrl: './mls-or-entry.component.html',
  styleUrls: ['./mls-or-entry.component.css']
})
export class MlsOrEntryComponent implements OnInit {
  navItemsDisplay
  navItems;
  loggedin = false;
  items = []
  currentPage = 'Entry'
  tempPath = {}
  navPath = {
    'Home':'Home',
    'Entry': '',
    'projectPage':'',
    'Departments':'',
    'Blocks':'',
    'Processes':''
  };
  index;
  navigateTo = function(item){
    this.tempPath = {};
    this.currentPage = Object.keys(this.navPath).find(key => this.navPath[key] === item);
    this.index = Object.values(this.navPath).indexOf(item)
    if (this.index == 0){
      this.navPath = {
        'Home':'Home',
        'Entry': '',
        'projectPage':'',
        'Departments':'',
        'Blocks':'',
        'Processes':''
      };
    } else{
    for (let key in this.navPath){
      this.index = this.index-1;
      if (this.index >= 0){
        this.tempPath[key] = this.navPath[key];
      }}
      this.navPath = this.tempPath;}
    this.chooseEntryType(item, this.index)
    console.log('Hey')
    // this.chooseEntryType.changeList()
  }
  chooseEntryType = function(option, index){
    this.showTable = false;
    this.changeList = function(nextPage, list){ 
      this.currentPage = nextPage;
      this.items = list;
      // this.router.navigate(['/mlsOrEntry'], {queryParams: list});
    }
    this.navPath[this.currentPage] = option;
    this.navItemsDisplay = Object["values"](this.navPath).filter(Boolean);
    if (option == 'Home'){ 
      this.changeList('Entry', ['MIS','Entry'])
    }
    if (option == 'Entry'){
      this.changeList('projectPage', ['Project1','Project2','Project3','Project4'] )
    }
    else if (option !== 'Entry' && this.currentPage == 'Blocks'){
      this.changeList('Processes', ['Pile Foundation','Structure Mounting','DC Cabling','Others','AC Works (Cabling And Erection)','AC Works(Civil)'] )
    }
    else if (option !== 'Entry' && this.currentPage == 'Departments'){
      this.changeList('Blocks', ['Block1' , 'Block2', 'Block3', 'Block4', 'Block5'] )
    }
    else if (option !== 'Entry' && this.currentPage == 'projectPage'){
      this.changeList('Departments', ['Engineering' , 'Procurement', 'Expedition', 'Execution', 'Comissioning','Manpower'] )
    }
    else if (option !== 'Entry' && this.currentPage == 'Processes'){
      this.showTable = true;
      this.tableHeader = option;
      if(option == 'Pile Foundation'){this.activities = ['Marking','Drilling','Moulding']}
      else if(option == 'Structure Mounting'){this.activities = ['Purlin','Rafter','Connector','Antisag','Module']}
      else if(option == 'DC Cabling'){this.activities = ['DC Trenching','DC Cable Laying & Conduiting','SCB Structure Mounting','SCB','DC Cable Termination at SCB/Inverter','Cable laying & termination','DC Earthing']}
      else if(option == 'Others'){this.activities = ['Fencing work','Street light work','Road work']}
      else if(option == 'AC Works (Cabling And Erection)'){this.activities = ['AC Cabling(HT + LT)','AC Trenching + Sand Line + Tiling','AC Cable Termination HT + LT ','PEB Room Errection','Transormer Errection', 'Inverter Errection', 'HT Panel Errection', 'Aux Transforrmer,Battery Charger/UPS Errection', 'AC Earthing']}
      else if(option == 'AC Works(Civil)'){this.activities = ['Inverter Foundations ','Inverter Transformer Foundation','HT Panel Foundation','Aux Trafo Foundation(C/R)','PEB foundation','AC Earthing']}

    }
    
  }
  constructor(private myComp :NavigationOnTopComponent ,private myservice: NavigationMenuService, private route: ActivatedRoute, private router: Router, location: PlatformLocation) {
    location.onPopState(() => {

      console.log('pressed back!');
      if (this.currentPage == 'Departments'){this.currentPage = 'projectPage'}
      else if (this.currentPage == 'Processes'){this.currentPage = 'Blocks'}
      else if (this.currentPage == 'Blocks'){this.currentPage = 'Departments'}
      else if (this.currentPage == 'projectPage'){this.currentPage = 'Entry'}
      this.navPath[this.currentPage] = ''; 
      this.navItemsDisplay.pop();
      

  });
  }
  options : [];
  ngOnInit() {
    this.route.queryParams.subscribe((_value) => { 
      this.items = Object.values(_value);
      if (this.navPath.Home == ''){ this.navPath.Home = 'Home'; this.navItemsDisplay[0] = 'Home'}
    })
    
    
      
  }

}
