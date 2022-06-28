import { defineStore } from 'pinia'
import Service from '@/types/Service'

// Example Pinia store: https://pinia.vuejs.org/
// This code is not utilized in the take-home exercise starter template.

export const useServiceStore = defineStore({
  id: 'services',
  state: () => ({
    services: [] as Service [],
    loading: false,
    itemsPerPage: 12,
    searchTerms: '',
    currPage: 1
  }),
  getters: {
    getServices: (state): Service [] => state.services,
    getFilteredServices(state): Service [] {
      let searchTerms = state.searchTerms.split(' ').filter(x => x !== '')

      // filter services list by search terms, and check through matching items by obj values
      return state.services.filter((service: any) => {
        return searchTerms.every(term => {
          return Object.values(service).some((objVal) => typeof objVal == 'string' && objVal.toLowerCase().includes(term.toLowerCase()))
        })
      })
    },
    getFilteredPagination(state): Service [] {
      let trimStart = (state.currPage - 1) * state.itemsPerPage
      let trimEnd = trimStart + state.itemsPerPage

      let trimmedData = this.getFilteredServices?.slice(trimStart, trimEnd)

      return trimmedData;
    },
  },
  actions: {
    incrementPage() {
      this.currPage++
    },
    decrementPage() {
      this.currPage--
    },
  },
})