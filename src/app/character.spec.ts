import { Character } from './character';

describe('Character', () => {
  it('should create an instance', () => {
    expect(new Character('name', 'path', true, 'color')).toBeTruthy();
  });
});
