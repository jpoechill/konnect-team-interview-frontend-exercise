// Import types for custom commands
/// <reference types="../../cypress/support" />

import { mount } from '@cypress/vue'
import ServiceModal from './ServiceModal.vue'

//
// What this commponent does:
//
// Props:
// 
// serviceData: should receive a single item's general information (name, description, version info) to be displayed
//
//
// State:
//
// no direct state information required
// 
//
// UI Interactions:
//
// clicking the close ('x') button should close the modal
//
// clicking on a list item should open the modal
// 
//
// UI Interface:
//
// when the modal is displayed, it should should the items name, description, version information (# of, and names)
// 

describe('ServiceModal', () => {
  describe('props', () => {
    it('<prop> - <test description>', () => {
      // To be implemented...
    })
  }
  
  describe('store', () => {
    it('<data> - <test description>', () => {
      // To be implemented...
    })
  }
  
  describe('User Interactions', () => {
    it('<interaction> - <test description>', () => {
      // To be implemented...
    })
  }

  describe('User Interface', () => {
    it('<interaction> - <test description>', () => {
      // To be implemented...
    })
  }
})