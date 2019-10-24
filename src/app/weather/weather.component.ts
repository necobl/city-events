import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  array = [];
  sourceImg: string;
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Banja%20Luka&APPID=e89289639d33729d4b6f8270f73d9569&units=metric").subscribe((result: any)=>{
      this.array.push(result)
      
      this.sourceImg = "http://openweathermap.org/img/w/"+result.weather[0].icon+".png"
    })
  }

}
