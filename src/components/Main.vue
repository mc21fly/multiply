<template>
  <div class="mainWraper">
    <div class="result" v-if="isover">
      <h1>Your result</h1>
      <ul>
        <li v-for="result in results" :key="results.indexOf(result)" :class="result.guessed">
          {{ `${result.n1} x ${result.n2} = ${result.answer}` }}
        </li>
      </ul>
    </div>

    <div class="game" v-else>
      <div class="display">{{ numbers }}</div>
      <input type="tel" v-on:keydown.enter="checkAnswer" v-model="answer" ref="answer">
      <button v-on:click="checkAnswer">Check!</button>
    </div>
  </div>
</template>

<script>
import Game from './game/Game';

window.game = new Game();
window.game.newPair();

export default {
  data() {
    return {
      numbers: window.game.showNumbers(),
      answer: '',
      isover: false,
      results: undefined,
    };
  },

  methods: {
    checkAnswer() {
      window.game.checkAnswer(this.answer);
      this.numbers = window.game.showNumbers();
      this.answer = '';
      this.$refs.answer.focus();
    },
  },

  mounted() {
    this.$refs.answer.focus();
  },

  updated() {
    this.isover = window.game.isOver();
    this.results = window.game.result;
  },
};
</script>

<style lang="scss">
.game, .result {
    background-color: lightblue;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.mainWraper {
  min-height: 500px;
}

.result {
  padding: 20px 0 20px 0;

  h1 {
    margin-bottom: 15px;
  }
}

.display {
    font-size: 70px;
}

input[type='tel'] {
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    text-align: center;
    font-size: 50px;

    &:focus {
      border-bottom: 1px solid tomato;
    }
}

button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    border: none;
    border-radius: 10px;

    &:hover {
        background-color: #fff;
    }
}

ul {
  list-style-type: none;
  text-align: center;
}

.false {
  color: tomato;
}

.true {
  color: green;
}
</style>
