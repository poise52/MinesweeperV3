<template>
  <div class="leaderboard">
    <h1>Leaderboard</h1>
    <Leaderboard />
    <router-link to="/">Вернуться к настройкам</router-link>
  </div>
</template>

<script>
import Leaderboard from '../components/Leaderboard.vue';

export default {
  components: {
    Leaderboard,
  },
};
</script>

<style scoped>
.leaderboard {
  text-align: center;
}
</style>