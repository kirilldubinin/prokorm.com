<template>
  <section class="main-navigator">
    <!--h1 class="text-center text-gray-600 mt-20 mb-12 uppercase">категории</h1-->
    <ul class="md:flex justify-center">
      <nuxt-link class="" :to="'/products/' + item.url" v-for="item in items" :key="item.code">
        <li class="main-navigator__item px-4 pt-4 mx-1 inline-block
                rounded-md text-center hover:shadow-sm hover:text-orange-400
                cursor-pointer opacity-75 hover:opacity-100">
          <div class="w-full" v-html="item.svg"/>
          <label class="text-xxs cursor-pointer">{{item.animal}}</label>
        </li>
      </nuxt-link>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {INavigatorItem} from '@/models/interfaces'
  export default Vue.extend({
    computed: {
      items (): INavigatorItem[] {return this.$store.getters.navigatorItems},
    }
  })
</script>

<style lang="scss">
  .main-navigator {
    &__item {
      &:hover {
        svg {
          fill: #f6ad55 !important;
          path {
            fill: #f6ad55 !important;
          }
        }

      }
    }
    svg {
      width: 36px;
      height: 36px;
      fill: #555 !important;
      path {
        fill: #555 !important;
      }
    }
  }
</style>
