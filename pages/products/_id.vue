<template>
  <section class="container m-auto max-w-4xl w-4xl">
    <Header/>
    <section class="px-1 h-screen">
      <Breadcrumbs class="hidden md:flex" :items="breadcrumbs"/>
      <section class="hidden md:flex">
        <ProductFilter :items="categories" :selected="selectedCategories" :onChange="changeCategoryFilter" title="Фильтр по типу"/>
        <ProductFilter class="justify-end" :items="stages" :selected="selectedStages" :onChange="changeStageFilter" title="Фильтр по периоду"/>
      </section>
      <div class="grid grid-cols-2 gap-6 font-comfortaa">
        <nuxt-link :to="'/products/' + animalRoute + '/' + product.code" v-for="product in products" v-bind:key="product.code">
          <ProductShort v-bind:product=product></ProductShort>
        </nuxt-link>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {IProduct, IFilterItem, IBreadcrumbs} from '../../models/interfaces'
  import {CATEGORY, STAGE, ANIMAL} from '@/models/enums'
  import {
    CHANGE_CATEGORY_FILTER,
    CHANGE_STAGE_FILTER,
  } from '@/store/mutations.type'

  export default Vue.extend({
    methods: {
      changeStageFilter(item:string):void { this.$store.commit(CHANGE_STAGE_FILTER, item) },
      changeCategoryFilter(item:string):void { this.$store.commit(CHANGE_CATEGORY_FILTER, item) }
    },
    computed: {
      animalRoute(): string { return this.$route.params.id },
      breadcrumbs(): IBreadcrumbs[] { return [
        {label: 'продукты', url: '/products'},
        {label: this.animal, url: '/products/' + this.animalRoute },
      ] },
      animal(): ANIMAL { return this.$store.getters.animalByRoute(this.animalRoute) },
      selectedStages(): string[] { return this.$store.getters.stageFilter},
      selectedCategories(): string[] { return this.$store.getters.categoryFilter},
      stages(): string[] { return this.$store.getters.stages(this.animal)},
      categories(): string[] { return this.$store.getters.categories(this.animal) },
      products(): IProduct[] { return this.$store.getters.products(this.animal)}
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
