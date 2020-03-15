import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuPlayCardsComponent } from './left-menu-play-cards.component';

describe('LeftMenuPlayCardsComponent', () => {
  let component: LeftMenuPlayCardsComponent;
  let fixture: ComponentFixture<LeftMenuPlayCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuPlayCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuPlayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
