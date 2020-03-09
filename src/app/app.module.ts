import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './root/container/app.component';
import { HeaderComponent } from './root/components/header/header.component';
import { HeroesComponent } from './root/components/heroes/heroes.component';
import { HallComponent } from './root/components/hall/hall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
