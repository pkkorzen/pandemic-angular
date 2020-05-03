import {Card} from './card';
import {Character} from './character';

export class Player {
  id: string;
  name: string;
  character: Character;
  actionsNumber: number;
  city: string;
  cards: Card [];
}
