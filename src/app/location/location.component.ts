import {Component, Input, OnInit} from '@angular/core';
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
  connections: string[];
  @Input()
  left: string;
  @Input()
  top: string;
  @Input()
  class: string;
  constructor() {
  }

  ngOnInit() {
  }

}
