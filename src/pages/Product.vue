<template>
  <main class="content">
    <div class="clear"></div>
    <product-item :id=id></product-item>
  </main>
</template>

<script>
  import ProductItem from '@/components/ProductItem';
    export default {
        name: "Product",
      props: ['id'],
      components: {
          ProductItem
      }
    }
</script>

<style scoped>

</style>
