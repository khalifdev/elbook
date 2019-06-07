<template>
  <div class="header">
    <div class="logo"><img :src=logo alt="Логотип Elbook.ru"></div>

    <ul class="menu">
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/catalog">Каталог</router-link></li>
      <li><router-link to="/contact">Контакты</router-link></li>
      <li>
        <router-link to="/cart">
          <button class="cart-button">
            <span class="textButton">Корзина</span>
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Search from "@/components/Search";
  export default {
    components: {
      Search,
    },
    data() {
      return {
        logo: require('@/assets/img/logo.png')
      }
    },
  }
</script>

<style scoped>
  /*--------- Шапка сайта ------------*/
  .header {
    min-height: 147px;
    background: #eaeaea; }

  .logo {
    float: left; }

  /*--------- Меню ------------*/
  .menu {
    float: right;
    list-style-type: none;
    padding-left: 0;
    margin-top: 60px;
    margin-right: 30px; }

  .menu li {
    display: inline; }

  .menu a {
    padding: 0 10px;
    color: #3537C3;
    text-decoration: none;
    font-family: "candara"; }

  .menu a:hover {
    color: coral; }

  .cart-button {
    color: #fff;
    cursor: pointer;
    /* float: right; */
    background-color: #3537C3;
    width: 95px;
    height: 35px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
    /* margin: 10px 40px 0px; */ }

  .cart-button:hover {
    box-shadow: #3537C3 0px 0px 10px;
    text-shadow: white 0px 0px 2px; }
</style>
