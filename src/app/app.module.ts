import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControllComponent } from './components/game-controll/game-controll.component';
import { EvenComponent } from './components/even/even.component';
import { OddComponent } from './components/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
