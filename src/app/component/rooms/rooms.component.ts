import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/Room';
import {HttpClient} from '@angular/common/http';
import {RoomShow} from '../../model/RoomShow';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[] = [];
  public roomsShow: RoomShow [] = [];

  public constructor(private http: HttpClient) {
  }

  public ngOnInit() {
    this.getAllRooms();
  }

  public getAllRooms() {

    let url = 'http://localhost:8080/api/room/all';

    this.http.get<any>(url,).subscribe(
        res => {
          this.rooms = res;
          this.roomsShow = this.rooms;

          for (let i = 0; i<this.rooms.length; i++){
            if(this.rooms[i].light == 1){
              this.roomsShow[i].light = "ON";
            }
            else {
              this.roomsShow[i].light = "OFF";

            }
          }
        },
        err => {
          alert('Error occurred while downloading the rooms;');
        }
    );

  }

}
