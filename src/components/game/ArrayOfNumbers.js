import PON from './PairOfNumbers';

export default class AON {
  constructor() {
    this.list = new Array(55);

    for (let i = 0, j = 1, k = j; i < this.list.length; i++) {
      this.list[i] = new PON(j, k);

      k++;
      if (k > 10) {
        j++;
        k = j;
      }
    }
  }
}
