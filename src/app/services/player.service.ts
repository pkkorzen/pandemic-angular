import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly playerAllUrl: string;
  private readonly playerSaveUrl: string;

  constructor(private http: HttpClient) {
    this.playerAllUrl = 'http://localhost:8080/players';
    this.playerSaveUrl = 'http://localhost:8080/player/save';
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerAllUrl);
  }

  public save(player: Player) {
    return this.http.post<Player>(this.playerSaveUrl, player);
  }
}
