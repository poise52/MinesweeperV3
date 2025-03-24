<template>
  <div class="game">
    <Header />
    <GameBoard />
    <button @click="restartGame">Перезапустить игру</button>
    <router-link to="/">Настройки</router-link>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import GameBoard from '../components/GameBoard.vue';

export default {
  components: {
    Header,
    GameBoard,
  },
  methods: {
    restartGame() {
      this.$store.dispatch('stopGame');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.game {
  text-align: center;
}
</style>