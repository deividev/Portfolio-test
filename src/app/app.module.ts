import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';





import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { SharedModule } from './shared/shared.module'
import { MaterialModule } from './material/material.module';
import { ProjectsModule } from './features/projects/projects.module';
import { AboutModule } from './features/about/about.module';
import { CommonModule } from '@angular/common';
//Inicio services libraries



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
