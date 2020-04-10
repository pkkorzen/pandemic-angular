import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuInfectedCardsComponent } from './left-menu-infected-cards.component';

describe('LeftMenuInfectedCardsComponent', () => {
  let component: LeftMenuInfectedCardsComponent;
  let fixture: ComponentFixture<LeftMenuInfectedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuInfectedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuInfectedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
