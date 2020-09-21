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
        query(':enter, :leave', style({position: 'fixed', width:'100%' }), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateY(-18%)' }),
            animate('0.8s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(100%)' }),
            animate('0.1s ease-in-out', style({ opacity: 0.8, transform: 'translateY(100%)' }))
          ], { optional: true }),
        ])
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
    return outlet.activatedRouteData.state;
  }
}
