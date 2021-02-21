<template>
  <section class="breadcrumbs flex text-xs text-gray-700 mb-6 py-6 font-comfortaa">
    <nuxt-link to="/">
      <h2 class="w-5 home-icon border-b border-white hover:border-gray-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </h2>
    </nuxt-link>
    <div class="flex" v-for="item in items" :key="item.url">
      <div class="px-2 arrow"/>
      <div v-if="!item.url" class="">{{item.label}}</div>
      <nuxt-link v-if="item.url" :to="item.url" class="border-b border-white hover:border-gray-500 cursor-pointer">
        {{item.label}}
      </nuxt-link>

    </div>
  </section>
</template>

<style lang="scss">
  .breadcrumbs {
    .home-icon {
      svg {
        margin-top: -2px;
      }
    }
    .arrow:after {
      content: ' \2192';
    }
  }
</style>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IBreadcrumbs} from '../models/interfaces'

  export default Vue.extend({
    name: 'Breadcrumbs',
    methods: {
      click(item:string): void {}
    },
    props: {
      items: {
        type: Array,
        required: true
      } as PropOptions<IBreadcrumbs[]>,
    }
  })

</script>
