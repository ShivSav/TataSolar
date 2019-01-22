import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationMenuService {
  serviceproperty;
  hellelujela;
  todayDate = this.showTodayDate();
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }


  constructor() { }
}
