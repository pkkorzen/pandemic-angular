import {Component, Input, OnInit} from '@angular/core';
import characters from '../../assets/characters.json';
import {Player} from '../player';
import {Character} from '../character';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input()
  player: Player;
  @Input()
  charactersMap: Map<string, Character>;
  characters = characters;

  constructor() {
  }

  ngOnInit() {
  }

  handleChangeEvent(e) {
    this.player.character.isAvailable = true;
    const characterChosen = this.charactersMap.get(e.target.value);
    if (characterChosen.name !== 'Random') {
      characterChosen.isAvailable = false;
    }
    this.player.character = characterChosen;
  }

  private clearName() {
    this.player.name = '';
  }

  private checkName() {
    if (this.player.name.trim() === '') {
      this.player.name = 'Click & type your name...';
    }
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.checkName()
      document.getElementById(this.player.id).blur();
    }
  }

  handleInputEvent(e) {
    this.player.name = e.target.value;
  }
}
