// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import ServicePagination from './ServicePagination.vue'

//
// What this commponent does:
//
// Props:
//
// no direct props
//
//
// State:
// should accept 'currPage', 'itemsPerPage', 'getFilteredServices' from state
//
// currPage: shows the current range of items (page) in nagivation
//
// itemsPerPage: shows the amount of items that should be displayed per page
//
// getFilteredServices: shows the total number of items, filtered from current searched words
//
// 
// UI Interactions:
//
// if the pagination component IS visible, and the user clicks the right arrow
// the component should display the next range of items in the list
// 
// if the pagination component IS visible, and the user clicks the left arrow
// the component should display the previous range of items in the list
// 
// UI Interface:
//
// if the number of service items on the page is larger than 12, 
// the pagination component should be visible
// 
// if the number of service items on the page is less than 12, 
// the pagination component should NOT be visible
//

describe('ServicePagination', () => {
  describe('props', () => {
    it('<prop> - <test description>', () => {
      // To be implemented...  
    })
  })
  
  describe('store', () => {
    it('<data> - <test description>', () => {
      // To be implemented...
    })
  })
  
  describe('User Interactions', () => {
    it('<interaction> - <test description>', () => {
      // To be implemented...
    })
  })

  describe('User Interface', () => {
    it('<interaction> - <test description>', () => {
      // To be implemented...
    })
  })
})