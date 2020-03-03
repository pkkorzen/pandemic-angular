import {AfterViewInit, Component, Input, OnInit, ElementRef, Inject, AfterViewChecked, OnChanges} from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';
import {LocationComponent} from '../location/location.component';
import {DOCUMENT} from '@angular/common';
import {PointCoordinatesService} from '../point-coordinates.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @Input()
  width: string;
  @Input()
  top: string;
  @Input()
  left: string;
  @Input()
  transform: string;
  @Input()
  connectionFrom: string;
  @Input()
  connectionTo: string;


  constructor(@Inject(DOCUMENT) private document: Document, private pointCoordinatesService: PointCoordinatesService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.createLine();
    });
  }

  private createLine() {
    const {height, width} = this.getMapSize();
    this.pointCoordinatesService.calculateLocationsCoordinates(width, height);
    const connectionFrom = this.getConnectionCoordinates(this.connectionFrom);
    const connectionTo = this.getConnectionCoordinates(this.connectionTo);
    this.drawLine(connectionFrom, connectionTo);
  }

  private getConnectionCoordinates(connection: string) {
    return this.pointCoordinatesService.map.get(connection);
  }

  private getMapSize() {
    const height = document.getElementById('map2').offsetHeight;
    const width = document.getElementById('map2').offsetWidth;
    return {height, width};
  }

  private drawLine(connectionFrom: Map<string, number>, connectionTo: Map<string, number>) {
    const x1: number = connectionFrom.get('left');
    const y1: number = connectionFrom.get('top');
    const x2: number = connectionTo.get('left');
    const y2: number = connectionTo.get('top');

    // the distance between the tow points(for the line div width)
    const distance: number = Math.sqrt( ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));

    // the mid-point between the two points, we use it as rotation center
    const xMid: number = (x1 + x2) / 2 + 10;
    const yMid: number = (y1 + y2) / 2 + 10;

    // get the salope of the line between two points
    const salopeInRadian: number = Math.atan2(y1 - y2, x1 - x2);
    const salopeInDegrees: number =  (salopeInRadian * 180) / Math.PI;

    // change the css of the line
    this.width = distance + 'px';
    this.top = yMid + 'px';
    this.left = xMid - (distance / 2) + 'px';
    this.transform = 'rotate(' + salopeInDegrees + 'deg)';
  }
  onResize() {
    this.createLine();
  }
}
