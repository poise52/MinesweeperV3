<template>
  <div class="leaderboard">
    <h2>Top 10 Players</h2>
    <ol>
      <li v-for="player in leaderboard" :key="player.name">{{ player.name }} - {{ player.time }}s</li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    leaderboard() {
      return this.$store.state.leaderboard.leaderboard;
    },
  },
};
</script>

<style scoped>
.leaderboard {
  text-align: left;
}
</style>