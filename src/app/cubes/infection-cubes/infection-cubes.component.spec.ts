import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionCubesComponent } from './infection-cubes.component';

describe('InfectionCubesComponent', () => {
  let component: InfectionCubesComponent;
  let fixture: ComponentFixture<InfectionCubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfectionCubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
