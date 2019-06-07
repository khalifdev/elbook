<template>
  <main class="content">
    <div class="clear"></div>
    <contact-form></contact-form>
    <addresses></addresses>
  </main>
</template>

<script>
  import ContactForm from '@/components/ContactForm'
    export default {
        name: "Contact",
      components: {
        ContactForm
      }
    }
</script>

<style scoped>

</style>
