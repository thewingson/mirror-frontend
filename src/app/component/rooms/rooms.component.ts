import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/Room';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public rooms: Room[] = [];

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
        },
        err => {
          alert('Error occurred while downloading the rooms;');
        }
    );

  }

}
