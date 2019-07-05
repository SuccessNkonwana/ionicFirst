import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route:Router) {}
  nextPage(){
    this.route.navigateByUrl('detail');
  }
  tabs(){
    this.route.navigateByUrl('tabs/detail')
  }
}
