<template>
  <div class="game-board" :style="boardStyle">
    <Cell
        v-for="(cell, index) in cells"
        :key="index"
        :cell="cell"
        @open-cell="openCell"
        @place-flag="placeFlag"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Cell from './Cell.vue';

export default {
  name: 'GameBoard',
  components: {
    Cell,
  },
  computed: {
    ...mapState('game', ['cells', 'rows', 'cols']),
    boardStyle() {
      return {
        gridTemplateColumns: `repeat(${this.cols}, 30px)`,
        gridTemplateRows: `repeat(${this.rows}, 30px)`,
      };
    },
  },
  methods: {
    ...mapActions('game', ['openCell', 'placeFlag']),
  },
};
</script>

<style scoped>
.game-board {
  display: grid;
  gap: 2px;
}
</style>