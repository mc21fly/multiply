<template>
  <div class="mainWraper">
    <div class="result" v-if="isover">
      <h1>Your result</h1>
        <div class="stopwatch">{{ finalTime }}</div>
      <ul>
        <li v-for="result in results" :key="results.indexOf(result)" :class="result.guessed">
          {{ `${result.n1} x ${result.n2} = ${result.answer}` }}
        </li>
      </ul>
    </div>

    <div class="game" v-else>
      <div class="stopwatch">{{ timeStop }}</div>
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
      timeStart: Date.now(),
      timeStop: '00:00.000',
      finalTime: '',
    };
  },

  methods: {
    checkAnswer() {
      window.game.checkAnswer(this.answer);
      this.numbers = window.game.showNumbers();
      this.answer = '';
      this.$refs.answer.focus();
    },

    showTime() {
      const t = new Date(Date.now() - this.timeStart);

      let m = t.getMinutes();
      let s = t.getSeconds();
      let ms = t.getMilliseconds();

      if (m < 10) {
        m = `0${m}`;
      }

      if (s < 10) {
        s = `0${s}`;
      }

      if (ms < 100 && ms > 9) {
        ms = `0${ms}`;
      }

      if (ms < 10) {
        ms = `00${ms}`;
      }

      this.timeStop = `${m}:${s}.${ms}`;
    },

    final() {
      const t = new Date(Date.now() - this.timeStart);

      let m = t.getMinutes();
      let s = t.getSeconds();
      let ms = t.getMilliseconds();

      if (m < 10) {
        m = `0${m}`;
      }

      if (s < 10) {
        s = `0${s}`;
      }

      if (ms < 100 && ms > 9) {
        ms = `0${ms}`;
      }

      if (ms < 10) {
        ms = `00${ms}`;
      }

      this.finalTime = `${m}:${s}.${ms}`;
    },
  },

  mounted() {
    this.$refs.answer.focus();
    window.setInterval(() => {
      this.showTime();
    }, 10);
  },

  updated() {
    this.isover = window.game.isOver();
    this.results = window.game.result;
    this.final();
  },
};

</script>

<style lang="scss">
.game, .result {
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.result {
  padding: 20px 0 20px 0;

  h1 {
    margin-bottom: 15px;
  }

  & .stopwatch {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 900;
  font-family: 'Concert One', cursive;
}

}

.display {
    font-size: 70px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.stopwatch {
  margin-top: 25px;
  font-size: 25px;
  font-family: monospace;
  font-weight: 900;
}

input[type='tel'] {
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    text-align: center;
    font-size: 50px;
    margin-bottom: 50px;

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
    margin-bottom: 50px;

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
  font-size: 20px;
}

.true {
  color: green;
  font-size: 20px;
}
</style>
