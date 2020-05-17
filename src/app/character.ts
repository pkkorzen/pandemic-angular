export class Character {
  name: string;
  imagePath: string;
  isAvailable: boolean;
  color: string;

  constructor(name: string, imagePath: string, isAvailable: boolean, color: string) {
    this.name = name;
    this.imagePath = imagePath;
    this.isAvailable = isAvailable;
    this.color = color;
  }
}
