import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LineComponent } from './line/line.component';
import { PlayerComponent } from './player/player.component';
import { LeftMenuComponent } from './menu/left-menu/left-menu/left-menu.component';
import { LeftMenuPlayCardsComponent } from './menu/left-menu/left-menu-play-cards/left-menu-play-cards.component';
import { LeftMenuInfectedCardsComponent } from './menu/left-menu/left-menu-infected-cards/left-menu-infected-cards.component';
import { LeftMenuHistoryComponent } from './menu/left-menu/left-menu-history/left-menu-history.component';
import { UpperMenuComponent } from './menu/upper-menu/upper-menu.component';
import { RightMenuComponent } from './menu/right-menu/right-menu/right-menu.component';
import { RightMenuPlayersComponent } from './menu/right-menu/right-menu-players/right-menu-players.component';
import { BottomMenuComponent } from './menu/bottom-menu/bottom-menu.component';
import { InfectionCubesComponent } from './infection-cubes/infection-cubes.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { CharacterChoiceComponent } from './character-choice/character-choice.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: '',
    component: CharacterChoiceComponent,
  },
];

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
    RightMenuComponent,
    RightMenuPlayersComponent,
    BottomMenuComponent,
    InfectionCubesComponent,
    StartingPageComponent,
    CharacterChoiceComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    NgxSvgModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
