import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-infection-cubes',
  templateUrl: './infection-cubes.component.html',
  styleUrls: ['./infection-cubes.component.css']
})
export class InfectionCubesComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  color: string;
  @Input()
  cubes: string;
  @Input()
  left: string;
  @Input()
  top: string;

  constructor() { }

  ngOnInit() {
  }

}
