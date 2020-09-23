import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss'],
  animations: [

    // Trigger animation cards array
    trigger('cardAnimation',
    [
      // Transition from any state to any state
      transition('* => *',
      [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms',
        [
        animate('.6s ease-in', keyframes(
        [
            style({ opacity: 0.2, transform: 'translateY( 50%)', offset: 0 }),
            style({ opacity: .8, transform: 'translateY( 10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))
          ]), { optional: true }),
        query(':leave', stagger('200ms',
        [
        animate('.8s ease-in', keyframes(
          [
            style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(50%)', offset: 1 })
          ]))
        ]), { optional: true })
      ]),
    ]),

    // Trigger animation for plus button
    trigger('plusAnimation',
    [
      // Transition from any state to any state
      transition('* => *',
      [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.plus-card', stagger('500ms', [
          animate('300ms 1.1s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])
  ]
})
export class CardProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [1, 2, 3, 4, 5]
  gridColumns = 2;
}
