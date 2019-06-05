import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPageComponent } from './right-page/right-page.component';
import { LeftPageComponent } from './left-page/left-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeStateComponent } from './component/home-state/home-state.component';
import { GlobalStateComponent } from './component/global-state/global-state.component';
import { WeatherComponent } from './component/weather/weather/weather.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {ApixuService} from './service/apixu/apixu.service';
import { FahrenheitPipe } from './pipe/fahrenheit/fahrenheit.pipe';
import { MomentPipe } from './pipe/moment/moment.pipe';
import {RoomsComponent} from './component/rooms/rooms.component';
import {RoomComponent} from './component/rooms/room/room.component';
import { ClockComponent } from './component/lastrow/clock/clock.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { LastrowComponent } from './component/lastrow/lastrow.component';
import {NewsComponent} from './component/lastrow/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPageComponent,
    LeftPageComponent,
    HomeStateComponent,
    GlobalStateComponent,
    WeatherComponent,
    FahrenheitPipe,
    MomentPipe,
    RoomsComponent,
    RoomComponent,
    ClockComponent,
    CalendarComponent,
    LastrowComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
