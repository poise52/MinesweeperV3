<template>
  <div
      class="cell"
      :class="cellClass"
      @click="handleClick"
      @contextmenu.prevent="handleRightClick"
  >
    <span v-if="cell.open && cell.mine">💣</span>
    <span v-else-if="cell.open && cell.count">{{ cell.count }}</span>
    <span v-else-if="cell.flag">🚩</span>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    cell: Object,
  },
  computed: {
    cellClass() {
      return {
        open: this.cell.open,
        mine: this.cell.open && this.cell.mine,
        flag: this.cell.flag,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('open-cell', this.cell);
    },
    handleRightClick() {
      this.$emit('place-flag', this.cell);
    },
  },
};
</script>

<style scoped>
.cell {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  cursor: pointer;
}

.cell.open {
  background-color: #e0e0e0;
}

.cell.mine {
  background-color: red;
}

.cell.flag {
  background-color: yellow;
}

.cell span {
  font-size: 1.2em;
}
</style>