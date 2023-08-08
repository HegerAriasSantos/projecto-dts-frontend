export class NumberUtils {
  static getRandomNumber(min: number, max: number) {
    return min + Math.random() * (max - min);
  }
}
