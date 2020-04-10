import {Component, Input, OnInit} from '@angular/core';
import {ColorConverterService} from '../../../color-converter.service';

@Component({
  selector: 'app-right-menu-players',
  templateUrl: './right-menu-players.component.html',
  styleUrls: ['./right-menu-players.component.css']
})
export class RightMenuPlayersComponent implements OnInit {
  @Input()
  private city: string;
  @Input()
  private color: string;
  @Input()
  private role: string;
  @Input()
  private name: string;
  constructor(private colorConverterService: ColorConverterService) { }

  ngOnInit() {
  }
}
