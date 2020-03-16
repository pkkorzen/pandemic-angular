import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LineComponent } from './line/line.component';
import { PlayerComponent } from './player/player.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftMenuPlayCardsComponent } from './left-menu-play-cards/left-menu-play-cards.component';
import { LeftMenuInfectedCardsComponent } from './left-menu-infected-cards/left-menu-infected-cards.component';
import { LeftMenuHistoryComponent } from './left-menu-history/left-menu-history.component';
import { UpperMenuComponent } from './upper-menu/upper-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LineComponent,
    PlayerComponent,
    LeftMenuComponent,
    LeftMenuPlayCardsComponent,
    LeftMenuInfectedCardsComponent,
    LeftMenuHistoryComponent,
    UpperMenuComponent,
  ],
  imports: [
    BrowserModule,
    NgxSvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
