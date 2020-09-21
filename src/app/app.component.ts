import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { tsParticles } from "tsparticles";
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          }),
        ],{ optional: true }),
        query(':enter', [
          style({ left: '-100%'})
        ],{ optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%'}))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%'}))
          ],{ optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
      ])
    ])
  ],
})
export class AppComponent {
  title = 'portfolio';

  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer,)
  {
    tsParticles.loadJSON("tsparticles", "assets/particles.json")
    .then((container) => {
      console.log("callback - tsparticles config loaded");
    })
    .catch((error) => {
      console.error(error);
    });

  }

  ngOnInit(): void {

  }

  public onSetTheme(nameClass: string) {
    this.overlayContainer.getContainerElement().classList.add(nameClass);
    this.componentCssClass = nameClass;
  }

  getState(outlet) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
  }
}
