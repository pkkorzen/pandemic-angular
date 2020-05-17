import {Component, OnInit} from '@angular/core';
import {Player} from '../player';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterChoiceDTO} from '../character-choice-dto';
import {CharacterChoiceService} from '../services/character-choice.service';

@Component({
  selector: 'app-character-choice',
  templateUrl: './character-choice.component.html',
  styleUrls: ['./character-choice.component.css']
})
export class CharacterChoiceComponent implements OnInit {
  maxPandemicCards: number[];
  maxPlayers: number[];
  characterChoiceDTO: CharacterChoiceDTO;

  constructor(private route: ActivatedRoute, private router: Router, private characterChoiceService: CharacterChoiceService) {
    this.characterChoiceDTO = new CharacterChoiceDTO();
    this.characterChoiceDTO.playerNumber = 2;
    this.characterChoiceDTO.pandemicNumber = 5;
    this.maxPlayers = this.fillInArray(2, 3);
    this.maxPandemicCards = this.fillInArray(4, 3);
    this.characterChoiceDTO.players = new Array(4);
    for (let i = 0; i < this.characterChoiceDTO.players.length; i++) {
      this.characterChoiceDTO.players[i] = new Player();
      this.characterChoiceDTO.players[i].name = 'Click & type your name...';
      this.characterChoiceDTO.players[i].character = 'Random';
      this.characterChoiceDTO.players[i].id = 'player' + (i + 1);
      this.characterChoiceDTO.players[i].city = 'Atlanta';
    }
  }

  ngOnInit() {
  }

  private fillInArray(minNumber: number, optionsToChoose: number): number[] {
    const array = new Array(optionsToChoose);
    for (let i = 0; i < array.length; i++) {
      array[i] = i + minNumber;
    }
    return array;
  }

  onSubmit() {
    this.characterChoiceService.save(this.characterChoiceDTO).subscribe(result => this.startGame());
  }

  startGame() {
    this.router.navigate(['/game']);
  }
}
