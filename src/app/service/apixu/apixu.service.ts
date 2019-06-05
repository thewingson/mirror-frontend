import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  private API_KEY = '300598dac84147739ba183229191705';

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/forecast.json?key='+this.API_KEY+'&q=' + location
    );
  }
}
