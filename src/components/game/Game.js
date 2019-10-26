import AON from './ArrayOfNumbers';

export default class Game {
  constructor() {
    const arr = new AON();

    this.arrayOfNumbers = arr.list;
    this.result = new Array(0);
    this.currentPair = '';
  }

  isOver() {
    if (this.currentPair !== undefined) {
      return false;
    }

    return true;
  }

  moveToResult() {
    this.result.push(this.currentPair);
  }

  removeFromAON() {
    this.arrayOfNumbers.splice(this.arrayOfNumbers.indexOf(this.currentPair), 1);
  }

  newPair() {
    this.currentPair = this.arrayOfNumbers[Math.floor(Math.random() * this.arrayOfNumbers.length)];
  }

  showNumbers() {
    if (!this.isOver()) {
      return `${this.currentPair.n1} x ${this.currentPair.n2}`;
    }

    return 'FINISHED';
  }

  writeAnswer(answer) {
    if (answer === this.currentPair.ans()) {
      this.currentPair.answer = answer;
      this.currentPair.guessed = 'true';
    } else {
      this.currentPair.answer = answer;
      this.currentPair.guessed = 'false';
    }
  }

  checkAnswer(answer) {
    if (this.currentPair !== undefined) {
      this.writeAnswer(answer);
      this.moveToResult();
      this.removeFromAON();
      this.newPair();
    }
  }
}
