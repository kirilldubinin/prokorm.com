import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {STAGE, CATEGORY, PACKING, ANIMAL} from '../models/enums'
import {IProduct, INavigatorItem} from '../models/interfaces'
import {
  CHANGE_CATEGORY_FILTER,
  CHANGE_STAGE_FILTER,
  CLEAR_ALL_FILTERS
} from '@/store/mutations.type'

import cowProducts from '~/static/data/products/cow'
import pigProducts from '~/static/data/products/pig'
import fishProducts from '~/static/data/products/fish'

import navigatorItems from '~/static/data/navigatorItems'

export const state = () => ({
  products: [
    ...cowProducts,
    ...pigProducts,
    ...fishProducts
  ] as IProduct[],
  categoryFilter: [] as CATEGORY[],
  stageFilter: [] as STAGE[]
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  [CLEAR_ALL_FILTERS]: (state) => {
    state.categoryFilter = []
    state.stageFilter = []
  },
  [CHANGE_CATEGORY_FILTER]: (state, category: CATEGORY) => {
    if (state.categoryFilter.indexOf(category) > -1) {
      state.categoryFilter = state.categoryFilter.filter((f) => f !== category)
    } else {
      state.categoryFilter.push(category)
    }
  },
  [CHANGE_STAGE_FILTER]: (state, stage: STAGE) => {
    if (state.stageFilter.indexOf(stage) > -1) {
      state.stageFilter = state.stageFilter.filter((f) => f !== stage)
    } else {
      state.stageFilter.push(stage)
    }
  },
  setRoute: (state, name) => {
    debugger
  }
}

export const getters: GetterTree<RootState, RootState> = {
  categoryFilter: state => state.categoryFilter,
  stageFilter: state => state.stageFilter,
  categories: (state) => (animal: ANIMAL):CATEGORY[] => {
    return state.products.filter(p => (p.animals.indexOf(animal) > -1))
          .map(p => (p.category))
          .filter((elem, pos, arr) => (arr.indexOf(elem) == pos))
  },
  stages: (state) => (animal: ANIMAL): STAGE[] => {
    return state.products.filter(p => (p.animals.indexOf(animal) > -1))
          .map(p => (p.stages))
          .reduce((prev, curr) => ([...prev, ...curr]))
          .filter((elem, pos, arr) => (arr.indexOf(elem) == pos))
  },
  products: (state) => (animal: ANIMAL):IProduct[] => {
    let products = state.products.filter(p => (p.animals.indexOf(animal) > -1))
    if (state.categoryFilter && state.categoryFilter.length) {
      products = products.filter(p => (state.categoryFilter.indexOf(p.category) > -1))
    }
    if (state.stageFilter && state.stageFilter.length) {
      products = products.filter(p => (state.stageFilter.filter(s => p.stages.includes(s)).length))
    }
    return products
  },
  product: (state) => (code: string):IProduct => {
    return state.products.filter(p => (p.code === code))[0]
  },
  animalByRoute: (state) => (route: string):ANIMAL => {
    return navigatorItems.filter(i => (i.url === route))[0].animal
  },
  navigatorItems: state => (navigatorItems)
}
