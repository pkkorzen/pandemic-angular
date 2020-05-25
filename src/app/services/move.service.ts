import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private readonly moveUrl: string;

  constructor(private http: HttpClient) {
    this.moveUrl = 'http://localhost:8080/move';
  }

  public move(location: string) {
    return this.http.post<string>(this.moveUrl, location);
  }
}
