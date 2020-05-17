import { Injectable } from '@angular/core';
import {Character} from '../character';
import characters from '../../assets/characters.json';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly charactersMap: Map<string, Character>;

  constructor() {
    this.charactersMap = new Map<string, Character>();
    for (const character of characters) {
      this.charactersMap.set(character.name, new Character(character.name, '../../assets/img/characters/'
        + character.name.toLowerCase() + '.png', true, character.color));
    }
  }

  getCharactersMap(): Map<string, Character> {
    return this.charactersMap;
  }
}
