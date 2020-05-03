export class Character {
  name: string;
  imagePath: string;
  isAvailable: boolean;

  constructor(name: string, imagePath: string, isAvailable: boolean) {
    this.name = name;
    this.imagePath = imagePath;
    this.isAvailable = isAvailable;
  }
}
