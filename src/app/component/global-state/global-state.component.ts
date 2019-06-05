import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-state',
  templateUrl: './global-state.component.html'
})
export class GlobalStateComponent implements OnInit {

  private title = 'Global State';

  constructor() { }

  ngOnInit() {
  }

}
