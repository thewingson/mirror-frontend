import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

    private appId: string;
    private appCode: string;

    private city: string;

    public weather: any;
    public weatherTemp: any;

    public constructor(private http: HttpClient) {
        this.appId = '8aKsxbZouX4LEM3ERGgX';
        this.appCode = 'esAv7SIB0JHCP-tlkYAJ9A';
        this.city = 'Almaty';
        this.weather = [6];
        this.weatherTemp = [];
    }

    public ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.getWeather(position.coords);
            });
        } else {
            console.error('The browser does not support geolocation...');
        }
    }

    public getWeather(coordinates: any) {

        let url = 'https://weather.cit.api.here.com/weather/1.0/report.json?' +
            'product=forecast_7days_simple' +
            '&latitude=' + coordinates.latitude +
            '&longitude=' + coordinates.longitude +
            '&app_id=' + this.appId + '&app_code=' +
            this.appCode;

        let url2 = 'https://weather.api.here.com/weather/1.0/report.json' +
            '?app_id=' + this.appId +
            '&app_code=' + this.appCode +
            '&product=observation' +
            '&name=' + this.city;

        this.http.jsonp(url, 'jsonpCallback')
            .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
            .subscribe(result => {
                this.weatherTemp = result.forecast;

                for (let i=0; i<6; i++){
                    this.weather[i] = this.weatherTemp[i];
                }
            }, error => {
                console.error(error);
            });
    }


    // public weatherSearchForm: FormGroup;
    // public weatherData: any;

    // constructor(private formBuilder: FormBuilder,
    //             private apixuService: ApixuService) {}
    //
    // ngOnInit() {
    //   this.weatherSearchForm = this.formBuilder.group({
    //     location: ['']
    //   });
    // }
    //
    // sendToAPIXU(formValues) {
    //   this.apixuService
    //       .getWeather(formValues.location)
    //       .subscribe(data => this.weatherData = data);
    //   console.log(this.weatherData);
    // }

}
