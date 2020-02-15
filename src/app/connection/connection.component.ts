import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit, AfterViewInit {
  @Input()
  connections: string;
  @Input()
  connectionName: string;
  @Input()
  leftLine: number;
  @Input()
  topLine: number;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  getConnections(connections: string): string[] {
    return connections.split(',');
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.leftLine = this.getLeftPosition();
      this.topLine = this.getTopPosition();
    });
  }

  getLeftPosition(): number {
    return this.document.getElementById(this.connectionName).offsetLeft;
  }

  getTopPosition(): number {
    return this.document.getElementById(this.connectionName).offsetTop;
  }
}
