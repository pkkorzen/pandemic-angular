import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PointCoordinatesService} from '../point-coordinates.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
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
  private colorize(color: string) {
    switch (color) {
      case 'blue': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(224deg)';
      }
      case 'red': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(360deg)';
      }
      case 'yellow': {
        return 'brightness(150%) sepia(80) saturate(100) hue-rotate(360deg)';
      }
      case 'green': {
        return 'brightness(60%) sepia(80) saturate(100) hue-rotate(126deg)';
      }
    }
  }

  onResize() {
    this.createPawn();
  }

}
