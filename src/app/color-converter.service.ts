import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorConverterService {

  constructor() { }

  convertColor(color: string): string {
    switch (color) {
      case 'blue': {
        return 'btn-primary';
      }
      case 'black': {
        return 'btn-dark';
      }
      case 'yellow': {
        return 'btn-warning';
      }
      default: {
        return 'btn-danger';
      }
    }
  }
}
