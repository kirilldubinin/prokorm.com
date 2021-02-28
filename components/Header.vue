<template>
  <section class="header z-10 sticky top-0 bg-white font-comfortaa">
    <section class="">
      <section class="md:flex py-8 w-full justify-center">
        <Logo class="justify-center"/>
        <MainNavigator class="ml-8 pt-3"/>
      </section>
      <!--section class="justify-end flex pb-4 pr-12 mb-10 opacity-75">
        <label class="text-xxs mx-4 cursor-pointer">галерея</label>
        <label class="text-xxs mx-4 cursor-pointer">статьи</label>
        <label class="text-xxs mx-4 cursor-pointer">контакты</label>
      </section-->
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
