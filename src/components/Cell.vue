<template>
  <div class="cell" @click="openCell" @contextmenu.prevent="placeFlag">

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>