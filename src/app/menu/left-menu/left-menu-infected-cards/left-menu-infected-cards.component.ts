import {Component, Input, OnInit} from '@angular/core';
import {ColorConverterService} from '../../../color-converter.service';

@Component({
  selector: 'app-left-menu-infected-cards',
  templateUrl: './left-menu-infected-cards.component.html',
  styleUrls: ['./left-menu-infected-cards.component.css']
})
export class LeftMenuInfectedCardsComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
  constructor(private colorConverterService: ColorConverterService) { }

  ngOnInit() {
  }
}
