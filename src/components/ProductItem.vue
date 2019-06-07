<template>
  <div>
    <h2>{{good.title}}</h2>
    <img class="base_img" :src=path :alt=good.title>
    <div class="right">
      <h3>Краткое описание</h3>
      <p class="krat" v-html="good.desc_short"></p>
      <h3>Характеристики</h3>
      <div v-html="good.char"></div>
      <div class="price"><strong>Цена: {{good.price}} руб.</strong></div>
      <div class="sale_button">Купить</div>
    </div>
    <div class="clear"></div>
    <h3>Подробное описание</h3>
    <p class="podr" v-html="good.desc_long"></p>
    <h3>Фрагмент из&nbsp;книги</h3>
    <div class="podr" v-html="good.fragm"></div>
  </div>
</template>

<script>
    export default {
        props: ['id'],
        name: "ProductItem",
      created() {
        this.$store.dispatch('getGoods');
      },
      computed: {
        good() {
          return this.$store.getters.goodsForCatalog[this.id];
        },
        path() {
          let img_path;
          if (this.good.path) {
            img_path = require('@/assets/img/' + this.good.path);
          } else {
            img_path = require('@/assets/img/nophoto_540x540.jpg');
          }
            return img_path;
        },
      }
    }
</script>

<style scoped>
  /*--------- Карточки товаров  ------------*/
  h2 {
    text-align: center;
  }

  .base_img {
    display: block;
    width: 200px;
    float: left;
    margin: 0 20px;
    outline-style: solid;
  }

  .base_img:hover {
    outline-width: 0px;
  }

  .right {
    overflow: hidden;
  }

  .price {
    margin: 5px 0;
    font-size: 24px;
    color: crimson;
    float: left;
  }

  .sale_button {
    overflow: hidden;
    margin-top: 5px;
    margin-left: 200px;
    width: 100px;
    height: 30px;
    line-height: 20px;
    background-color: crimson;
    border-radius: 5px;
    color: beige;
    text-align: center;
    padding-top: 4px;
    box-sizing: border-box;
  }

  .sale_button:hover {
    cursor: pointer;
    box-shadow: crimson 0px 0px 5px;
    text-shadow: white 0px 0px 2px;
  }

  .sale_button:active {
    background-color: brown;
  }

  h3 {
    text-align: center;
    color: black;
    font-size: 18px;
    font-weight: 400;
    background: #eaeaea;
  }

  .krat {
    color: #707070;
    font-size: 14px;
    font-style: italic;
    line-height: 16px;
  }

  .podr {
    color: #484343;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

</style>
