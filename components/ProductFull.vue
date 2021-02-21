<template>
  <section class="product md:flex">
    <section class="w-1/4 mr-8 hidden md:block">
      <h2 class="font-baloo ml-2 text-gray-500 text-md">{{product.name}}</h2>
      <h2 class="font-baloo ml-2 text-orange-500 text-2xl">{{product.type}}</h2>
      <div class="mt-4 bg-cover w-full h-72 rounded-sm shadow-md opacity-75 mb-4" style="background-image: url('/cow/feedy/start_2_removebg.png')"></div>
      <h2 class="text-gray-700 text-xxs ml-4 my-2">
        узнать цену ?
      </h2>
      <h2 class="text-gray-700 text-xxs ml-4 my-2">
        получить консультацию ?
      </h2>
      <h4 class="text-xs text-orange-500 ml-4">8 800 550 28 27</h4>
    </section>
    <section class="block mb-4 md:hidden">
      <h2 class="font-baloo ml-2 text-gray-500 text-md">{{product.name}}</h2>
      <h2 class="font-baloo ml-2 text-orange-500 text-2xl">{{product.type}}</h2>
    </section>
    <section class="w-full md:w-3/4 mt-1 px-2 text-justify font-comfortaa leading-4">
      <div class="text-xxs text-gray-700">
        {{product.fullDescription}}
      </div>
      <div v-if="product.gost" class="gost text-sm mt-2 text-gray-600">
        {{product.gost}}
      </div>

      <div class="composition pt-8 text-xs text-gray-700">
        <h4 class="uppercase text-orange-500 pb-2">дозировка</h4>
        <ul>
          <li v-for="dose in product.dosing" class="text-xxs leading-4 md:leading-5" v-bind:key="dose" v-html="dose"></li>
        </ul>
      </div>

      <div v-if="product.enhancements.length" class="composition pt-8 text-xs text-gray-700">
        <label class="uppercase block text-orange-500 pb-2">действие</label>
        <ul>
          <li v-for="enhancement in product.enhancements" class="text-xxs leading-4 md:leading-5" v-bind:key="enhancement">{{enhancement}}</li>
        </ul>
      </div>

      <div class="pt-8 md:grid grid-cols-3 gap-4 text-xxs text-gray-600">
        <div class="mt-2 md:mt-0" v-for="indicator in product.indicators" v-bind:key="indicator.name">
          <ul>
              <li class="leading-5 md:leading-6 flex text-orange-500">
              <label class="block uppercase pr-4 text-xs">{{indicator.name}}</label>
              {{indicator.measurement}}
            </li>
            <li class="flex leading-5 md:leading-6" v-for="value in indicator.values" v-bind:key="value[0]">
              <label class="w-2/3">{{value[0]}}</label>
              <span class="text-right" v-html="value[1]"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="composition pt-8 text-xxs text-gray-700">
        <label class="uppercase block text-xs text-orange-500">состав</label>
        <p class="leading-4">{{product.composition}}</p>
      </div>

      <div class="composition pt-8 text-xxs text-gray-600">
        <label class="uppercase block pb-2 text-orange-500">упаковка</label>
        {{product.packing}}, {{product.weight}}
      </div>

    </section>
  </section>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct} from '../models/interfaces'
  import {PACKING} from '@/models/enums'

  export default Vue.extend({
    name: 'ProductFull',
    data () {
      return {
        PACKING
      }
    },
    props: {
      product: {
        type: Object,
        required: true
      } as PropOptions<IProduct>
    }
  })

</script>
<style lang="scss">
  .no-photo {
    svg {
      fill: #718096;
    }
  }
</style>
