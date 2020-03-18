import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {
  color: string;
  constructor() {
    this.color = 'yellow';
  }

  ngOnInit() {
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
}
