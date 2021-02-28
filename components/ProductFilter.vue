<template>
  <section class="filter mb-12 w-1/2 justify-start font-comfortaa">
    <h2 class="text-xs ml-4 uppercase text-orange-500 mb-2">{{title}}</h2>
    <section class="flex">
      <button v-for="item in items" :key="item"
        @click="click(item)"
        class="text-gray-600 py-1 px-2 mx-2
        hover:text-orange-500 hover:shadow-xs cursor-pointer rounded-sm text-xxs"
        :class="{'text-orange-500 shadow-xs': selected.indexOf(item) > -1}">
        {{item}}
      </button>
    </section>
  </section>
</template>

<style lang="scss">

</style>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct, IFilterItem} from '../models/interfaces'
  import {CATEGORY, STAGE} from '@/models/enums'

  export default Vue.extend({
    name: 'ProductFilter',
    methods: {
      click(item:string): void {
        this.onChange(item)
      }
    },
    props: {
      title: {
        type: String,
        required: false
      } as PropOptions<string>,
      onChange: {
        type: Function,
        required: true
      },
      items: {
        type: Array,
        required: true
      } as PropOptions<string[]>,
      selected: {
        type: Array,
        required: true
      } as PropOptions<string[]>
    }
  })

</script>
