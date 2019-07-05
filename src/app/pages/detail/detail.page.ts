import { Component, OnInit } from '@angular/core';
declare var L;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
name;
surname;
age;
gender;


  constructor() { }

  submit(){
   console.log( this.name);
   console.log( this.surname);
   console.log( this.age);
   console.log( this.gender);
  }
  ngOnInit() {
    const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic3VjY2VzcyIsImEiOiJjanhxMjNxemkwbTJyM2NwOWwxeG1tbGZjIn0.bDNdundlCIPQcFAc5MAqJg'
}).addTo(mymap);
  }

}
