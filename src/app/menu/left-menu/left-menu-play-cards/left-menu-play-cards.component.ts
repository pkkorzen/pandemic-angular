import {Component, Input, OnInit} from '@angular/core';
import {ColorConverterService} from '../../../color-converter.service';

@Component({
  selector: 'app-left-menu-play-cards',
  templateUrl: './left-menu-play-cards.component.html',
  styleUrls: ['./left-menu-play-cards.component.css']
})
export class LeftMenuPlayCardsComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
  constructor(private colorConverterService: ColorConverterService) { }

  ngOnInit() {
  }
}
