import {
  CLEAR_ALL_FILTERS
} from '@/store/mutations.type'

export default ({ store}) => {
  store.commit(CLEAR_ALL_FILTERS)
}
