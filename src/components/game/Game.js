import AON from './ArrayOfNumbers';

export default class Game {
  constructor() {
    this.arrayOfNumbers = new AON().list;
    this.result = new Array(0);
    this.currentPair = '';

    this.isOver = () => (this.currentPair === undefined);
    this.removeFromAON = () => this.arrayOfNumbers.splice(this.arrayOfNumbers.indexOf(this.currentPair), 1);
    this.newPair = () => { this.currentPair = this.arrayOfNumbers[Math.floor(Math.random() * this.arrayOfNumbers.length)]; this.removeFromAON(); };
    this.moveToResult = () => { this.result.push(this.currentPair); this.newPair(); };
    this.showNumbers = () => (this.isOver() ? 'FINISHED' : `${this.currentPair.n1} x ${this.currentPair.n2}`);
    this.writeAnswer = answer => ((answer === this.currentPair.ans()) ? this.currentPair.setTrue(answer) : this.currentPair.setFalse(answer));
    this.checkAnswer = (answer) => { this.writeAnswer(answer); this.moveToResult(); };
  }
}
