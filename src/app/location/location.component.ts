import {Component, Input, ElementRef, OnInit, AfterViewInit} from '@angular/core';

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
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }
}
