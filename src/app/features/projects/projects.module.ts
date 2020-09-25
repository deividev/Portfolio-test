import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridProjectsComponent } from './grid-projects/grid-projects.component';
import { ProjectsRoutingModule } from './projects-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CardProjectsComponent } from './card-projects/card-projects.component';


@NgModule({
  declarations: [
    GridProjectsComponent,
    CardProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    GridProjectsComponent,
  ]
})
export class ProjectsModule { }
