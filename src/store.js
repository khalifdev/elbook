import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

const $http = Axios.create({
  baseURL: 'http://api',
  timeout: 1000,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goods: [],
    filteredGoods: [],
    goodsInCart: []
  },
  getters: {
    goodsForCatalog: state => state.filteredGoods,
    goodsInCart: state => state.goodsInCart
  },
  mutations: {
    setGoods(state, goods){
      state.goods = goods;
      state.filteredGoods = state.goods;
    },
    setFilteredGoods(state, searchLine){
      const regexp = new RegExp(searchLine, 'i');
      state.filteredGoods = state.goods.filter(good => regexp.test(good.title));
    },
    setCartGoods(state, good) {
      const index = state.goodsInCart.indexOf(good);
      if (index === -1) {
        good.count = 1;
        good.sum = good.price;
        state.goodsInCart.push(good);
      }
      // если нет
      else {
        state.goodsInCart[index].count += 1;
        state.goodsInCart[index].sum += good.price;
      }
    },
    dropCartGoods(state, good) {
      const index = state.goodsInCart.indexOf(good);
      if (index != -1) {
        state.goodsInCart.splice(index, 1);
      }
      else {
        console.log('Not find in cart!');
      }
    }
  },
  actions: {
    async getGoods(context) {
      try {
        const {data} = await $http.get(`/goods.json`);
        context.commit("setGoods", data);
      } catch(err) {
        console.error(err);
      }
    },
    filterGoods(context, searchLine) {
      context.commit("setFilteredGoods", searchLine);
    },
    addToCart(context, good) {
      context.commit("setCartGoods",good);
    },
    removeFromCart(context, good) {
      context.commit("dropCartGoods",good);
    }
  }
})
