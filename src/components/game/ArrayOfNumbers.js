import PON from './PairOfNumbers';

export default class AON {
  constructor() {
    this.list = new Array(55);

    const twoDArray = new Array(10);

    for (let i = 0; i < 10; i += 1) {
      twoDArray[i] = new Array(10);
      for (let j = 0; j < 10; j += 1) {
        twoDArray[i][j] = new PON(i + 1, j + 1);
      }
    }

    for (let j = 0; j < 10; j += 1) {
      for (let i = j; i < twoDArray.length - 1; i += 1) {
        twoDArray[i + 1].splice(0, 1);
      }
    }

    for (let i = 0, j = 0, k = 0; i < this.list.length; i += 1) {
      this.list[i] = twoDArray[j][k];

      k += 1;
      if (k === twoDArray[j].length) {
        j += 1;
        k = 0;
      }
    }
  }
}
