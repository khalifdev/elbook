<template>
  <div class="search">
    <form @submit.prevent="filterGoods" class="search-form">
      <input type="text" v-model="searchLine" class="search-input">
      <button class="search-button" type="submit">Найти</button>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
          return {
            searchLine: '',
          }
        },
      methods: {
        filterGoods() {
          this.$store.dispatch('filterGoods',this.searchLine);
        }
      }
    }
</script>

<style scoped>
  .search{
    clear: both;
    background: #eaeaea;
  }
  .search-form {
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .search-input {
    height: 38px;
    border-radius: 4px;
    border-style: groove;
    width: 600px;
    padding: 10px;
    box-sizing: border-box;
  }
  .search-button {
    color: #fff;
    cursor: pointer;
    background-color: #3537C3;
    width: 95px;
    height: 36px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    -o-border-image: initial;
    border-image: initial;
    border-radius: 0 4px 4px 0;
    margin: -99px;
  }

</style>
