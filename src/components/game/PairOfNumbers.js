export default class PON {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    this.guessed = undefined;
    this.answer = undefined;

    this.ans = () => `${this.n1 * this.n2}`;
    this.setTrue = (answer) => { this.answer = answer; this.guessed = 'true'; };
    this.setFalse = (answer) => { this.answer = answer; this.guessed = 'false'; };
  }
}
