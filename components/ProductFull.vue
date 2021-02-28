<template>
  <section class="product md:flex font-comfortaa px-2 ">
    <section class="w-full md:w-1/4 mr-8 mb-4 md:mb-0">
      <ProductName :product="product"/>
      <div v-if="!product.img" class="my-4 no-photo w-full h-72 text-center opacity-75 bg-gray-200 pt-20 rounded-sm shadow-md">
        <svg class="opacity-75 block m-auto" height="64" viewBox="0 0 74 74" width="64" xmlns="http://www.w3.org/2000/svg"><path d="m23.5 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m66 63.5h-25.56a1 1 0 0 1 0-2h25.56a4 4 0 0 0 4-4v-35a4 4 0 0 0 -4-4h-15.26a2.011 2.011 0 0 1 -1.834-1.193l-1.824-4.207a.994.994 0 0 0 -.912-.6h-18.34a.991.991 0 0 0 -.909.591l-1.821 4.209a2.014 2.014 0 0 1 -1.838 1.2h-15.262a4 4 0 0 0 -4 4v35a4 4 0 0 0 4 4h5.56a1 1 0 1 1 0 2h-5.56a6.006 6.006 0 0 1 -6-6v-35a6.006 6.006 0 0 1 6-6h15.26l1.822-4.2a2.975 2.975 0 0 1 2.748-1.8h18.34a2.977 2.977 0 0 1 2.751 1.81l1.817 4.19h15.262a6.006 6.006 0 0 1 6 6v35a6.006 6.006 0 0 1 -6 6z"/><path d="m33.44 63.5h-2.94a1 1 0 0 1 0-2h2.94a1 1 0 0 1 0 2z"/><path d="m18.219 18.5h-7.667a1 1 0 0 1 -1-1v-5.307a1.7 1.7 0 0 1 1.693-1.693h6.281a1.694 1.694 0 0 1 1.693 1.693v5.307a1 1 0 0 1 -1 1zm-6.667-2h5.667v-4h-5.667z"/><path d="m34 55.562a16.312 16.312 0 1 1 16.312-16.312 16.33 16.33 0 0 1 -16.312 16.312zm0-30.624a14.312 14.312 0 1 0 14.312 14.312 14.328 14.328 0 0 0 -14.312-14.312z"/><path d="m34 49.179a9.929 9.929 0 1 1 9.929-9.929 9.94 9.94 0 0 1 -9.929 9.929zm0-17.858a7.929 7.929 0 1 0 7.929 7.929 7.938 7.938 0 0 0 -7.929-7.929z"/><path d="m63.156 30h-8.312a1.846 1.846 0 0 1 -1.844-1.844v-4a1.846 1.846 0 0 1 1.844-1.844h8.312a1.846 1.846 0 0 1 1.844 1.844v4a1.846 1.846 0 0 1 -1.844 1.844zm-8.156-2h8v-3.688h-8z"/></svg>
        <label class="block text-center text-xxs pt-2 text-gray-600">нет фото</label>
      </div>
      <div v-if="product.img" class="mн-4 bg-cover bg-center w-full h-72 rounded-sm shadow-md opacity-90"
        :style="{backgroundImage: 'url(/images/' + product.img + ')'}">
      </div>
      <h2 class="text-gray-700 text-xxs my-2">узнать цену ?</h2>
      <h2 class="text-gray-700 text-xxs my-2">получить консультацию ?</h2>
      <h4 class="text-xs text-orange-500">8 800 550 28 27</h4>
    </section>
    <section class="w-full md:w-3/4 mt-1 text-justify font-comfortaa leading-4">
      <div v-if="product.gost" class="mb-2 gost text-sm text-gray-600">
        {{product.gost}}
      </div>
      <div class="text-xxs text-gray-700">
        {{product.fullDescription}}
      </div>
      <div v-if="product.applying" class="composition pt-8 text-xs text-gray-700">
        <h4 class="uppercase text-orange-500 pb-2">применение</h4>
        <p class="text-xxs leading-4 md:leading-5">{{product.applying}}</p>
      </div>

      <div v-if="product.dosing" class="composition pt-8 text-xs text-gray-700">
        <h4 class="uppercase text-orange-500 pb-2">дозировка</h4>
        <ul>
          <li v-for="dose in product.dosing" class="text-xxs leading-4 md:leading-5" v-bind:key="dose" v-html="dose"></li>
        </ul>
      </div>

      <div v-if="product.sideEffects" class="composition pt-8 text-xs text-gray-700">
        <label class="uppercase block text-orange-500 pb-2">побочные явления</label>
        <ul>
          <li v-for="effect in product.sideEffects" class="text-xxs leading-4 md:leading-5" v-bind:key="effect">{{effect}}</li>
        </ul>
      </div>

      <div v-if="product.specialIstructions" class="composition pt-8 text-xs text-gray-700">
        <label class="uppercase block text-orange-500 pb-2">особые указания</label>
        <ul>
          <li v-for="specialIstruction in product.specialIstructions" class="text-xxs leading-4 md:leading-5" v-bind:key="specialIstruction">{{specialIstruction}}</li>
        </ul>
      </div>

      <div v-if="product.enhancements" class="composition pt-8 text-xs text-gray-700">
        <label class="uppercase block text-orange-500 pb-2">действие</label>
        <ul>
          <li v-for="enhancement in product.enhancements" class="text-xxs leading-4 md:leading-5" v-bind:key="enhancement">{{enhancement}}</li>
        </ul>
      </div>

      <div :class="{'grid-cols-3': product.indicators.length > 2, 'grid-cols-2': product.indicators.length < 2}" class="pt-8 md:grid gap-4 text-xxs text-gray-600">
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
      <div class="composition pt-8 text-gray-700">
        <label class="text-xs uppercase block pb-2 text-orange-500">состав</label>
        <p class="text-xxs leading-4">{{product.composition}}</p>
      </div>

      <div class="composition pt-8 text-xxs text-gray-600">
        <label class="text-xs uppercase block pb-2 text-orange-500">упаковка</label>
        {{product.packing}}, {{product.weight}}
      </div>

    </section>
  </section>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct} from '../models/interfaces'
  import {PACKING} from '@/models/enums'
import ProductName from './ProductName.vue'

  export default Vue.extend({
  components: { ProductName },
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
