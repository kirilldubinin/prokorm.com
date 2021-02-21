<template>
  <section class="product-navigator font-comfortaa">
    <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-2 m-auto text-justify">
      <nuxt-link :to="'/products/' + item.url"  v-for="item in items" :key="item.url"
        class="block border p-4 border-gray-200 rounded-sm cursor-pointer hover:shadow-md">
        <h2 class="text-orange-500 text-2xl mt-1 uppercase text-center">{{item.animal}}</h2>
        <div class="flex mt-4">
          <label class="mx-2 text-xs text-gray-500" v-for="category in item.categories" :key="category">
            {{category}}
          </label>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {INavigatorItem, IProduct} from '@/models/interfaces'
import { CATEGORY } from '~/models/enums'
  export default Vue.extend({
    computed: {
      items (): INavigatorItem[] { return this.$store.getters.navigatorItems.map((item: INavigatorItem) => ({
        ...item,
        categories: this.$store.getters.categories(item.animal)
      }))},
    }
  })
</script>

<style lang="scss">
  .product-navigator {
    svg {
      width: 48px;
      height: 48px;
      fill: #555 !important;
      path {
        fill: #555 !important;
      }
    }
  }
</style>
