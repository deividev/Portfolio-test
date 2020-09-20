import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-projects',
  templateUrl: './grid-projects.component.html',
  styleUrls: ['./grid-projects.component.scss']
})
export class GridProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }
}
