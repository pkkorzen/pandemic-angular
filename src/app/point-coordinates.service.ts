import { Injectable } from '@angular/core';
import connections from '../assets/connections.json';
import locations from '../assets/locations.json';
@Injectable({
  providedIn: 'root'
})
export class PointCoordinatesService {
  map: Map<string, Map<string, number>>;

  constructor() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (const location of locations) {
      const map2 = new Map<string, number>();
      map2.set('top', Number(location.top) * height);
      map2.set('left', Number(location.left) * width);
      this.map = new Map<string, Map<string, number>>();
      this.map.set(location.name, map2);
    }
  }
}
