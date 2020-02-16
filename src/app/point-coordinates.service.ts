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
    this.map = new Map<string, Map<string, number>>();
    for (const location of locations) {
      const map2 = new Map<string, number>();
      map2.set('top', parseFloat(location.top) * height / 100);
      map2.set('left', parseFloat(location.left) * width / 100);
      this.map.set(location.name, map2);
    }
  }
}
