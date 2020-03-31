import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import characters from '../../assets/characters.json';

@Component({
  selector: 'app-character-choice',
  templateUrl: './character-choice.component.html',
  styleUrls: ['./character-choice.component.css']
})
export class CharacterChoiceComponent implements OnInit {
  hide: boolean;
  value: string;
  map: Map<string, number>;
  characters = characters;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  player1Image: string;
  player2Image: string;
  player3Image: string;
  player4Image: string;

  constructor(@Inject(DOCUMENT) document) {
    this.hide = true;
    this.value = 'Aldonka';
    this.player1 = 'Random';
    this.player2 = 'Random';
    this.player3 = 'Random';
    this.player4 = 'Random';
    this.player1Image = '../../assets/img/character-choice.png';
    this.player2Image = '../../assets/img/character-choice.png';
    this.player3Image = '../../assets/img/character-choice.png';
    this.player4Image = '../../assets/img/character-choice.png';
    this.map = new Map<string, number>();
    for (const character of characters) {
      this.map.set(character.name, 0);
    }
  }

  @Output() nameChange = new EventEmitter<string>();

  private enable() {
    this.hide = false;
    this.value = '';
    setTimeout(() => {
      document.getElementById('input2').focus();
    }, 0);
  }

  private setTrue() {
    this.hide = true;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.hide = true;
    }
  }

  handleChangeEvent(e) {
    this.value = e.target.value;
  }

  selectEvent(e, character: string) {
    this.map.set(character, 0);
    this.map.set(e.target.value, 1);
    const playerId = e.target.id;
    switch (playerId) {
      case 'player1': {
        this.player1 = e.target.value;
        this.player1Image = '../../assets/img/characters/' + e.target.value.toLowerCase() + '.png';
        break;
      }
      case 'player2': {
        this.player2 = e.target.value;
        this.player2Image = '../../assets/img/characters/' + e.target.value.toLowerCase() + '.png';
        break;
      }
      case 'player3': {
        this.player3 = e.target.value;
        this.player3Image = '../../assets/img/characters/' + e.target.value.toLowerCase() + '.png';
        break;
      }
      default: {
        this.player4 = e.target.value;
        this.player4Image = '../../assets/img/characters/' + e.target.value.toLowerCase() + '.png';
      }
    }
  }

  ngOnInit() {
  }

}
