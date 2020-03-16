import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuPlayersComponent } from './right-menu-players.component';

describe('RightMenuPlayersComponent', () => {
  let component: RightMenuPlayersComponent;
  let fixture: ComponentFixture<RightMenuPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMenuPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMenuPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
