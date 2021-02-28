<template>
  <div class="container m-auto max-w-5xl w-5xl font-comfortaa">
    <Header/>
    <section class="px-2">
      <Breadcrumbs class="" :items="breadcrumbs"/>
      <section v-if="!product">
        <h4>Нет такого продукта</h4>
      </section>
      <ProductFull v-if="product" v-bind:product="product"></ProductFull>
      <section class="my-20 hidden md:block">
        <h2 class="uppercase block mb-12 text-orange-500">другие продукты для {{animal}}</h2>
        <div class="flex justify-center">
          <ProductInterested class="mx-6" :product="product" v-for="product in productsInterested" :key="product.code"/>
        </div>
      </section>
      <Footer/>
    </section>
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct, IBreadcrumbs} from '../../../models/interfaces'
  import {ANIMAL} from '@/models/enums'

  export default Vue.extend({
    computed: {
      animal(): ANIMAL { return this.$store.getters.animalByRoute(this.$route.params.animal) },
      product (): IProduct {return this.$store.getters.product(this.$route.params.id)},
      productsInterested (): IProduct {return this.$store.getters.productsInterested(this.animal, this.$route.params.id)},
      breadcrumbs(): IBreadcrumbs[] { return [
        {label: 'продукты', url: '/products'},
        {label: this.animal, url: '/products/' + this.$route.params.animal },
        {label: this.product.name + ' ' + this.product.type}
      ] }
    }
  })

</script>

