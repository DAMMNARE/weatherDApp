import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  myWeather:any;
  temperature: number = 0;
  maxTemperature: number = 0;
  minTemperature: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;
  
constructor(private weatherService:WeatherService) {

}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({

      next: (res) => {
        console.log(res)
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.maxTemperature = this.myWeather.main.temp_max;
        this.minTemperature = this.myWeather.main.temp_min;
        this.humidity = this.myWeather.main.humidity;
        this.windSpeed = this.myWeather.wind.speed
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }


}
