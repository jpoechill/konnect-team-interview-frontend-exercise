// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import ServiceCatalog from './ServiceCatalog.vue'

//
// What this commponent does:
//
// Props:
// 
// serviceData: function that should be emitted when a user clicks an item (opens/closes a modal)
//
//
// State:
//
// getFilteredPagination: returns the exact items that should be visible, filtered from search words, and curr page
// 
//
// UI Interactions:
//
// when making a search, the results should only be updated after the user has finished typing (debounce)
//
// after making a search, the items in the main list should be updated and show the correct (filtered) results
// 
//
// UI Interface:
//
// the search input should be visible
//
// the 'add new service' should be visible
//
// when loading, there should be placeholder (loading) items visible
//
// when there are 0 items in list, a message should be displayed, describing that there are no items to display
//
// on a desktop-sized screen, 4 item columns should be displayed
//
// on a tablet-sized screen, 3 item columns should be displayed
//
// on a mobile-sized screen, 1 item columns should be displayed

describe('ServiceCatalog', () => {

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

    it('shows a search input', () => {
      mount(ServiceCatalog)

      cy.get('.search-input').should('be.visible').invoke('attr', 'placeholder').should('eq', 'Search services')
    })
  })
})