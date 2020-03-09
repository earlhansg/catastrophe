import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './root/container/app.component';
import { HeaderComponent } from './root/components/header/header.component';
import { HeroesComponent } from './root/components/heroes/heroes.component';
import { HallComponent } from './root/components/hall/hall.component';
import { AdoptingComponent } from './root/components/adopting/adopting.component';
import { AppointmentComponent } from './root/components/appointment/appointment.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HallComponent,
    AdoptingComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
