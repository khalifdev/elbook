import Vue from 'vue';
import Router from 'vue-router';
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
