import { TestBed } from '@angular/core/testing';

import { ColorConverterService } from './color-converter.service';

describe('ColorConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorConverterService = TestBed.get(ColorConverterService);
    expect(service).toBeTruthy();
  });
});
