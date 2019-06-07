<template>
  <div id="app">
    <div class="container">
    <header-base></header-base>

      <router-view></router-view>

    <footer-base></footer-base>
    </div>
  </div>
</template>

<script>
import HeaderBase from "@/components/HeaderBase"
import FooterBase from "@/components/FooterBase"

export default {
  name: 'App',
  components: {
    HeaderBase,
    FooterBase
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0; }

  body,
  html {
    height: 100%; }

  body {
    background-color: #f8f8f8; }

  .container {
    max-width: 1200px;
    min-width: 410px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column; }

  /*--------- Основной контент ------------*/
  .content {
    min-height: 360px;
    flex: 1 0 auto; }

  /*--------- Для разделения после блоков с float------------*/
  .clear {
    clear: both; }
</style>
