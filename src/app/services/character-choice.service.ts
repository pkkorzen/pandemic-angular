import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterChoiceDTO} from '../character-choice-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterChoiceService {

  private readonly characterChoiceUrl: string;

  constructor(private http: HttpClient) {
    this.characterChoiceUrl = 'http://localhost:8080/characterChoice';
  }

  public save(characterChoiceDTO: CharacterChoiceDTO) {
    return this.http.post<CharacterChoiceDTO>(this.characterChoiceUrl, characterChoiceDTO);
  }
}
