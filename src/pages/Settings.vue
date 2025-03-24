<template>
  <div class="settings">
    <h1>Minesweeper Settings</h1>
    <form @submit.prevent="startGame">
      <label for="difficulty">Выбрать Сложность:</label>
      <select v-model="difficulty" id="difficulty">
        <option value="Легкий">Easy (8x8, 10 mines)</option>
        <option value="Средний">Medium (16x16, 40 mines)</option>
        <option value="Сложный">Hard (32x16, 100 mines)</option>
      </select>
      <button type="Начать">Start Game</button>
    </form>
    <router-link to="/leaderboard">View Leaderboard</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficulty: 'Легкий',
    };
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame', { difficulty: this.difficulty, grid: [], mines: 0 });
      this.$router.push('/game');
    },
  },
};
</script>

<style scoped>
.settings {
  text-align: center;
}
</style>