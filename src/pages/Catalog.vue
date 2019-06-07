<template>
  <main class="content">
    <search></search>
  <div class="clear"></div>
  <!--<cart v-if="isVisibleCart" :goods="goodsInCart" @remove-from-cart="removeFromCart"></cart>-->
  <goods-list :goods="goods">
    <goods-item v-for="good in goods"
                :key="good.id"
                :good="good"
                @add-to-cart-item="addToCart(good)">
    </goods-item>

  </goods-list>
  </main>
  <!--<div id="catalog-empty" v-if="filteredGoods.length ==0"><h2>Нет данных</h2></div>-->

</template>

<script>
  // import Cart from "@/components/Cart";
  import GoodsList from "@/components/GoodsList";
  import GoodsItem from "@/components/GoodsItem";
  import Search from "@/components/Search"

     export default {
        name: "Catalog",
        components: {
          Search,
          GoodsList,
          GoodsItem
        },
       created() {
          this.$store.dispatch('getGoods');
       },
       computed: {
          goods() {
            return this.$store.getters.goodsForCatalog;
          }
       },
       methods: {
          addToCart(good) {
            this.$store.dispatch('addToCart',good);
          }
       }
     }
</script>

<style scoped>


</style>
