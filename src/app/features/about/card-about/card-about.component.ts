import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-card-about',
  templateUrl: './card-about.component.html',
  styleUrls: ['./card-about.component.scss'],
  animations: [
    trigger('aboutAnimation',
    [
      // Transition from any state to any state
      transition('* => *',
      [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('400ms',
        [
        animate('0.8s ease-in', keyframes(
        [
            style({ opacity: 0.4, transform: 'translateY( 50%)', offset: 0 }),
            style({ opacity: .8, transform: 'translateY( 10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
          ]), { optional: true }),
        query(':leave', stagger('200ms',
        [
        animate('0.8s ease-in', keyframes(
          [
            style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY( -10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY( -50%)', offset: 1 })
          ]))
        ]), { optional: true })
      ]),
    ]),
  ]
})
export class CardAboutComponent implements OnInit {

  panelOpenState = false;


  constructor() { }

  ngOnInit(): void {
  }

}
