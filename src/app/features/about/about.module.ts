import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CardAboutComponent } from './card-about/card-about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmartAboutComponent } from './smart-about/smart-about.component';

import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    CardAboutComponent,
    SmartAboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    SmartAboutComponent
  ]
})
export class AboutModule { }
