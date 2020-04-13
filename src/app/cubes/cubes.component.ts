import {Component, Input, OnInit} from '@angular/core';
import cubes from '../../assets/cubes-degrees.json';
@Component({
  selector: 'app-cubes',
  templateUrl: './cubes.component.html',
  styleUrls: ['./cubes.component.css']
})
export class CubesComponent implements OnInit {
  @Input()
  left: string;
  @Input()
  top: string;
  @Input()
  cubes: string;
  @Input()
  x: number;
  @Input()
  color: string;
  @Input()
  from: string;
  @Input()
  to: string;
  cubesDegrees = cubes;
  constructor() {
  }

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
