<template>
  <div class="appWraper">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Concert One', cursive;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
}

body {
  background:lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.appWraper {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  padding: 30px;
}

@media (min-width: 1200px) {
  .appWraper {
    width: 40%;
  }
}

</style>
