import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuHistoryComponent } from './left-menu-history.component';

describe('LeftMenuHistoryComponent', () => {
  let component: LeftMenuHistoryComponent;
  let fixture: ComponentFixture<LeftMenuHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
