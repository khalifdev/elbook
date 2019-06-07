<template>
  <div class="goods-item">
    <router-link :to="'/product/'+good.id">
      <img :src=path :alt=good.title>
      <h4>{{good.title}}</h4>
      <p>{{good.price}}</p>
    </router-link>
    <button class='addClick' @click="$emit('add-to-cart-item', good)">
      Купить
    </button>
  </div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props: ['good'],
      data(){
          if (this.good.path) {
            return {
              path: require('@/assets/img/' + this.good.path),
            }
          } else {
            return {
              path: require('@/assets/img/nophoto_540x540.jpg'),
            }
          }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .goods-item {
    margin-left: 20px;
    height: 270px;
    width: 200px;
    float: left;
    text-align: center;
    box-sizing: border-box; }
  .goods-item h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; }
  .goods-item p, .goods-item img {
    margin: 10px auto; }
  .goods-item img {
    height: 150px; }

  .addClick, .removeClick {
    width: 70px;
    height: 25px;
    border-radius: 4px;
    background: #3537C3;
    border-style: initial;
    color: #fff;
    cursor: pointer; }
</style>
