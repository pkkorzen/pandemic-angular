import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  @Input()
  left: string;
  @Input()
  top: string;
  @Input()
  cubes: string;
  @Input()
  index: number;
  @Input()
  color: string;
  constructor() {
  }

  ngOnInit() {
  }
  cubesAnimationConverter(cubesNumber: string, cubeOrdinal: number): string {
    const classString = cubesNumber + '-' + cubeOrdinal;
    switch (classString) {
      case '1-0': {
        return 'one-cube';
      }
      case '2-0': {
        return 'two-cubes-first';
      }
      case '2-1': {
        return 'two-cubes-second';
      }
      case '3-0': {
        return 'three-cubes-first';
      }
      case '3-1': {
        return 'three-cubes-second';
      }
      default: {
        return 'three-cubes-third';
      }
    }
  }

  cubesAnimationConverter2(cubesNumber: string, cubeOrdinal: number): string {
    const animationString = cubesNumber + '-' + cubeOrdinal;
    switch (animationString) {
      case '1-0': {
        return 'cubesAnimation';
      }
      case '2-0': {
        return 'cubesAnimation-2-1';
      }
      case '2-1': {
        return 'cubesAnimation-2-2';
      }
      case '3-0': {
        return 'cubesAnimation-3-1';
      }
      case '3-1': {
        return 'cubesAnimation-3-2';
      }
      default: {
        return 'cubesAnimation-3-3';
      }
    }
  }
}
