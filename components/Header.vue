<template>
  <section class="header z-10 sticky top-0 bg-white">
    <section class="md:flex py-8 w-full mb-10 justify-center">
      <Logo class="justify-center"/>
      <MainNavigator class="ml-8 pt-5"/>
    </section>
  </section>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Logo from './Logo.vue'
  import Contact from './Contact.vue'

  export default Vue.extend({})
</script>

<style lang="scss">
  .header {
    box-shadow: 0 8px 6px -6px #efefef;
  }
</style>
