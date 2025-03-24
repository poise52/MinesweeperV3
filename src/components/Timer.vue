<template>
  <div class="timer">{{ timer }}</div>
</template>

<script>
export default {
  computed: {
    timer() {
      return this.$store.state.game.timer;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.$store.state.game.gameStarted) {
        this.$store.dispatch('incrementTimer');
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.timer {
  font-size: 2em;
}
</style>