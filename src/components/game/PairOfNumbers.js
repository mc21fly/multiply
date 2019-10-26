export default class PON {
  constructor(number1, number2) {
    this.n1 = number1;
    this.n2 = number2;
    this.guessed = undefined;
    this.answer = undefined;
  }

  ans() {
    return `${this.n1 * this.n2}`;
  }
}
