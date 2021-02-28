<template>
  <section class="flex font-comfortaa">
    <div>
      <h2 class="font-baloo text-gray-500 text-md">{{product.name}}</h2>
      <h2 class="font-baloo text-orange-500 text-lg text-bold">{{product.type}}</h2>
    </div>
    <div class="flex-1 right text-gray-600">
      <div class="w-auto right flex text-xxs justify-end pt-2">
        <h4 class="mr-1">
          {{product.category}}
        </h4>
      </div>
      <div class="w-auto right flex text-xxs  text-orange-500 justify-end pt-2">
        <h4 class="mr-1"
          v-for="stage in product.stages"
          v-bind:key="stage">
          {{stage}}
        </h4>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct} from '../models/interfaces'

  export default Vue.extend({
    name: 'ProductName',
    props: {
      product: {
        type: Object,
        required: true
      } as PropOptions<IProduct>
    }
  })

</script>
