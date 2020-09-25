import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.scss'],
})
export class CardAboutComponent implements OnInit {

  panelOpenState = false;


  constructor() { }

  ngOnInit(): void {
  }

}
