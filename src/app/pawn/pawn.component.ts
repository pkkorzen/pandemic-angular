import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PointCoordinatesService} from '../point-coordinates.service';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css']
})
export class PawnComponent implements OnInit {
  @Input()
  city: string;
  @Input()
  color: string;
  @Input()
  top: string;
  @Input()
  left: string;

  constructor(@Inject(DOCUMENT) private document: Document, private pointCoordinatesService: PointCoordinatesService) { }

  ngOnInit() {
    setTimeout(() => {
      this.createPawn();
    });
  }

  private createPawn() {
    const city = this.getCityCoordinates(this.city);
    this.drawnPawn(city);
  }

  private getCityCoordinates(city: string) {
    return this.pointCoordinatesService.map.get(city);
  }

  private drawnPawn(city: Map<string, number>) {
    this.left = city.get('left') + 'px';
    this.top = (city.get('top') - 25) + 'px';
  }
   colorize(color: string) {
    switch (color) {
      case 'blue': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(224deg)';
      }
      case 'red': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(360deg)';
      }
      case 'pink': {
        return 'brightness(60%) sepia(80) saturate(77) hue-rotate(325deg)';
      }
      case 'brown': {
        return 'brightness(74%) sepia(80) saturate(100) hue-rotate(52deg)';
      }
      case 'orange': {
        return 'brightness(51%) sepia(77) saturate(25) hue-rotate(360deg)';
      }
      case 'white': {
        return 'brightness(100%) sepia(80) saturate(0) hue-rotate(360deg)';
      }
      case 'yellow': {
        return 'brightness(150%) sepia(80) saturate(100) hue-rotate(360deg)';
      }
      case 'green': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(126deg)';
      }
      case 'light green': {
        return 'brightness(82%) sepia(100) saturate(30) hue-rotate(75deg)';
      }
      case 'dark green': {
        return 'brightness(82%) sepia(100) saturate(76) hue-rotate(75deg)';
      }
      case 'sea blue': {
        return 'brightness(75%) sepia(80) saturate(3) hue-rotate(167deg)';
        //brightness(82%) sepia(0) saturate(48) hue-rotate(125deg)
      }
    }
  }

  onResize() {
    this.createPawn();
  }

}
