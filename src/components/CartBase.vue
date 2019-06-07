<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div id="cartHeaderRow">
      <div class="cartHeaderCell cartProduct">Товар</div>
      <div class="cartHeaderCell cartPrice">Цена</div>
    </div>
    <div class='cartRow' v-for="good in goodsInCart">
      <div class='cartRowCell cartProduct'>{{good.title}}</div>
      <div class='cartRowCell cartPrice'>{{good.price}} р.</div>
      <div class='cartRowCell cartCount'>
        <button class='removeClick' @click="removeFromCart(good)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CartBase",
        computed: {
          goodsInCart() {
            return this.$store.getters.goodsInCart;
          }
        },
      methods: {
        removeFromCart(good) {
          this.$store.dispatch('removeFromCart',good);
        }
      }
    }
</script>

<style scoped>
  /*--------- Область Корзины ------------*/
  .cart {
    width: 100%;
    min-height: 200px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 0 30px 20px;
    box-sizing: border-box;
    margin-bottom: 20px; }
  .cart h2 {
    text-align: center; }
  .cart #cartHeaderRow {
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #d9dadc;
    border-bottom: 1px solid #d9dadc; }
  .cart .cartRow {
    min-height: 60px;
    margin-top: 20px; }
  .cart .cartHeaderCell, .cart .cartRowCell {
    float: left; }
  .cart .cartHeaderCell,
  .cart .cartPrice,
  .cart .cartCount,
  .cart .cartSum {
    text-align: center; }
  .cart .cartProduct {
    width: 60%; }
  .cart .cartPrice {
    width: 12%; }
  .cart .cartCount {
    width: 16%; }
  .cart .cartCount .count_right,
  .cart .cartCount .count_left {
    border: 1px solid #d9dadc;
    height: 20px;
    width: 20px;
    display: inline-block;
    cursor: pointer; }
  .cart .cartCount .count_center {
    display: inline-block; }
  .cart .cartCount .count_input {
    width: 30px;
    height: 20px;
    text-align: center;
    border-width: 1px;
    border-style: ridge; }
  .cart .cartSum {
    width: 12%; }
  .cart .resultText {
    float: left;
    width: 88%;
    font-size: 20px;
    font-weight: bold; }
  .cart .resultText, .cart .resultSum {
    font-size: 20px;
    font-weight: bold; }

  .removeClick {
    width: 70px;
    height: 25px;
    border-radius: 4px;
    background: #3537C3;
    border-style: initial;
    color: #fff;
    cursor: pointer; }
</style>
