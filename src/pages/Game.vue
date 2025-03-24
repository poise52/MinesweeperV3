<template>
  <div class="game">
    <Header />
    <GameBoard />
    <button @click="resetGame">Restart Game</button>
    <router-link to="/">Settings</router-link>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import GameBoard from '../components/GameBoard.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    Header,
    GameBoard,
  },
  methods: {
    ...mapActions('game', ['resetGame']),
  },
};
</script>

<style scoped>
.game {
  text-align: center;
}
</style>