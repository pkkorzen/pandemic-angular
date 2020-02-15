import { Component } from '@angular/core';
import locations from '../assets/locations.json';
import {log} from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pandemic-angular';
  locations = locations;

  locationOnClick() {
    alert('location clicked');
  }

  colorConverter(color: string): string {
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
