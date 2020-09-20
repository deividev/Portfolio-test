import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../../app.component'

@Component({
  selector: 'app-grid-projects',
  templateUrl: './grid-projects.component.html',
  styleUrls: ['./grid-projects.component.scss']
})
export class GridProjectsComponent implements OnInit {

  constructor(private appComp: AppComponent) { }

  ngOnInit(): void {
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return this.appComp.getState(outlet);
  }
}
