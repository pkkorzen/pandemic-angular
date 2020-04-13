import {Component, Input, OnInit} from '@angular/core';
import cubes from '../../assets/cubes-degrees.json';
@Component({
  selector: 'app-infection-cubes',
  templateUrl: './infection-cubes.component.html',
  styleUrls: ['./infection-cubes.component.css']
})
export class InfectionCubesComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  color: string;
  @Input()
  cubes: string;
  @Input()
  left: string;
  @Input()
  top: string;
  cubesDegrees = cubes;
  constructor() { }

  ngOnInit() {
  }

  converter(num: string): string{
    switch (num) {
      case '1': {
        return 'one';
      }
      case '2': {
        return 'two';
      }
      default: {
        return 'three';
      }
    }
}

  converter2(num: number): string{
    switch (num) {
      case 0: {
        return 'first';
      }
      case 1: {
        return 'second';
      }
      default: {
        return 'third';
      }
    }
  }
}
