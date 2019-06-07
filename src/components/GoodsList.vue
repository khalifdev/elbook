<template>
  <div class="goods-list">
    <slot></slot>
  </div>
</template>

<script>
   export default {
       name: "GoodsList",
       //props: ['goods']
   }
</script>

<style scoped>
  .goods-list {
    margin-left: -20px;
    margin-top: 20px; }



  .summ-item {
    clear: both; }
</style>
