<template>
  <div class="header">
    <div class="mines-count">Mines: {{ remainingMines }}</div>
    <div class="timer">Time: {{ timer }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    remainingMines() {
      return this.$store.state.game.mines - this.$store.state.game.flags;
    },
    timer() {
      return this.$store.state.game.timer;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>