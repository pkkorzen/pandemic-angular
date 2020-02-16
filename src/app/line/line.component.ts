import {AfterViewInit, Component, Input, OnInit, ElementRef, Inject, AfterViewChecked} from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';
import {LocationComponent} from '../location/location.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewChecked {
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


  constructor(@Inject(DOCUMENT) private document: Document) {  }

  ngOnInit() {

  }
  ngAfterViewChecked() {
   // setTimeout(() => {
     // this.leftLineCity = this.getLeftPosition();
     // this.topLineCity = this.getTopPosition();
      // this.createLine();
     // console.log(this);
   // });
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
  createLine() {
    const x1: number = this.leftLine; // document.getElementById(point1Id).offsetLeft;
    const y1: number = this.topLine; // document.getElementById(point1Id).offsetTop;
    const x2: number = this.leftLineCity; // document.getElementById(point2Id).offsetLeft;
    const y2: number = this.topLineCity; // document.getElementById(point2Id).offsetTop;
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
}
