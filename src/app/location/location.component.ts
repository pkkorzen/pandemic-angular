import {Component, Input, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import {PointCoordinatesService} from '../point-coordinates.service';

// @ts-ignore

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input()
  name: string;
  @Input()
  color: string;
  @Input()
  connections: string;
  @Input()
  left: string;
  @Input()
  top: string;
  @Input()
  class: string;
  locationNameLeft: string;
  locationNameTop: string;
  constructor(private el: ElementRef, private pointCoordinatesService: PointCoordinatesService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.createLine();
    });
  }

  private createLine() {
    const {height, width} = this.getMapSize();
    this.pointCoordinatesService.calculateLocationsCoordinates(width, height);
    const locationName = this.getConnectionCoordinates(this.name);
    this.drawLine(locationName);
  }

  private getMapSize() {
    const height = document.getElementById('background-map').offsetHeight;
    const width = document.getElementById('background-map').offsetWidth;
    return {height, width};
  }

  private getConnectionCoordinates(connection: string) {
    return this.pointCoordinatesService.map.get(connection);
  }

  private drawLine(locationName: Map<string, number>) {
    const x1: number = locationName.get('left') - 12;
    const y1: number = locationName.get('top') + 15;

    this.locationNameLeft = x1.toString() + 'px';
    this.locationNameTop = y1.toString() + 'px';
  }
  onResize() {
    this.createLine();
  }
}
