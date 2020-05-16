import { TestBed } from '@angular/core/testing';

import { CharacterChoiceService } from './character-choice.service';

describe('CharacterChoiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterChoiceService = TestBed.get(CharacterChoiceService);
    expect(service).toBeTruthy();
  });
});
