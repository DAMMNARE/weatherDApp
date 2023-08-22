import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather() {
return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Bucharest&appid=9b48abd4423c55baac48387766795027&units=metric')
  }
}
