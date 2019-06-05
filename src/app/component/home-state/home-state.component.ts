import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-state',
  templateUrl: './home-state.component.html',
  styleUrls: ['./home-state.component.scss']
})
export class HomeStateComponent implements OnInit {

  private title = "Home State";

  constructor() { }

  ngOnInit() {
  }

}
