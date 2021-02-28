<template>
  <section class="product-interested p-4 w-1/3 mx-4 font-comfortaa shadow-xs cursor-pointer hover:shadow-md rounded-sm">
    <nuxt-link :to="'/products/' + currentAnimalRoute + '/' + product.code">
      <ProductName :product="product"/>
      <div class="mt-4 h-16 md:h-12 block text-xxs text-gray-700 leading-5">
        {{product.shortDescription}}
      </div>
    </nuxt-link>
  </section>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {INavigatorItem, IProduct} from '@/models/interfaces'

  export default Vue.extend({
    computed: {
      currentAnimalRoute(): string { return this.$route.params.animal },
    },
    props: {
      product: {
        type: Object,
        required: true
      } as PropOptions<IProduct>
    }
  })
</script>
