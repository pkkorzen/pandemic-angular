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
export class LineComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @Input()
  topLine: number;
  @Input()
  leftLine: number;
  @Input()
  topLineCity: number;
  @Input()
  leftLineCity: number;
  @Input()
  connection: string;
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
      const height = document.getElementById('map2').offsetHeight;
      const width = document.getElementById('map2').offsetWidth;
      this.pointCoordinatesService.calculate(width, height);
      console.log(this.connectionFrom + this.pointCoordinatesService.map.get(this.connectionFrom).get('top'));
      const connectionFrom = this.pointCoordinatesService.map.get(this.connectionFrom);
      const connectionTo = this.pointCoordinatesService.map.get(this.connectionTo);
      this.createLine(connectionFrom, connectionTo);
    });
  }

  ngAfterViewChecked() {

   // setTimeout(() => {
     // this.leftLineCity = this.getLeftPosition();
     // this.topLineCity = this.getTopPosition();
      // this.createLine();
     // console.log(this);
   // });
  }
  ngAfterViewInit(): void {

  }

  getLeftPosition(): number {
    if (this.connection) {
      return this.document.getElementById(this.connection).offsetLeft;
    }

  }

  getTopPosition(): number {
    if (this.connection) {
      return this.document.getElementById(this.connection).offsetTop;
    }
  }
  createLine(connectionFrom: Map<string, number>, connectionTo: Map<string, number>) {
    const x1: number = connectionFrom.get('left'); // this.leftLine; // document.getElementById(point1Id).offsetLeft;
    const y1: number = connectionFrom.get('top'); // this.topLine; // document.getElementById(point1Id).offsetTop;
    const x2: number = connectionTo.get('left'); // this.leftLineCity; // document.getElementById(point2Id).offsetLeft;
    const y2: number = connectionTo.get('top'); // this.topLineCity; // document.getElementById(point2Id).offsetTop;
   //  console.log( 'leftline: ' + x1, 'leftlineCity: ' + x2, 'topline: ' + y1, 'toplineCity: ' + y2);
    /// the distance between the tow points(for the line div width)
    const distance: number = Math.sqrt( ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));

    // the mid-point between the two points, we use it as rotation center
    const xMid: number = (x1 + x2) / 2;
    const yMid: number = (y1 + y2) / 2;

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
    const height = document.getElementById('map2').offsetHeight;
    const width = document.getElementById('map2').offsetWidth;
    this.pointCoordinatesService.calculate(width, height);
    console.log(this.connectionFrom + this.pointCoordinatesService.map.get(this.connectionFrom).get('top'));
    const connectionFrom = this.pointCoordinatesService.map.get(this.connectionFrom);
    const connectionTo = this.pointCoordinatesService.map.get(this.connectionTo);
    this.createLine(connectionFrom, connectionTo);
  }
}
