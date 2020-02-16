import { TestBed } from '@angular/core/testing';

import { PointCoordinatesService } from './point-coordinates.service';

describe('PointCoordinatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointCoordinatesService = TestBed.get(PointCoordinatesService);
    expect(service).toBeTruthy();
  });
});
