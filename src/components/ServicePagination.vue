<template>
  <div>
    <div v-if="totalFilteredLen > itemsPerPage" class="pagination">
      <button @click="pageLeft()" label="nav-left" class="btn-pagination">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.345703 4.49609L4.14258 0.699219V3.8457H14.4434V5.14648H4.14258V8.29297L0.345703 4.49609Z" fill="#BFBFBF"/>
        </svg>
      </button>

      {{ calcPageRange }}

      <button @click="pageRight()" label="nav-right" class="btn-pagination">
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6543 4.49609L10.8574 0.699219V3.8457H0.556641V5.14648H10.8574V8.29297L14.6543 4.49609Z" fill="#BFBFBF"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useServiceStore } from '../stores/services'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'ServicePagination',
  setup() {
    const serviceStore = useServiceStore()
    const { currPage, itemsPerPage } = storeToRefs(serviceStore)
    const totalFilteredLen = computed(() => {
      return serviceStore.getFilteredServices.length
    })

    const calcPageRange = computed((): string => {
      let totalItems = totalFilteredLen.value;
      let trimStart = (currPage.value - 1) * itemsPerPage.value
      let trimEnd = trimStart + itemsPerPage.value

      if (trimEnd >= totalItems) { trimEnd = totalItems }

      return  + trimStart + ' – ' + --trimEnd + ' of ' + (--totalItems)
    })

    function pageLeft() {
      if (currPage.value > 1) {
        serviceStore.decrementPage()
      }
    }

    function pageRight() {
      if (currPage.value < Math.ceil(totalFilteredLen.value/itemsPerPage.value)) {
        serviceStore.incrementPage()
      }
    }

    return {
      itemsPerPage,
      totalFilteredLen,
      calcPageRange,
      pageLeft,
      pageRight
    }
  },
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px 50px 50px;
  color: #AFAFAF;
  font-size: 16px;
}

.btn-pagination {
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: 1px solid #E5E5E5;
  border-radius: 50px;
  margin: 0px 50px;
}

.btn-pagination:hover {
  border-color: #A6C6FF;
  cursor: pointer;

  path {
    fill: #1456CB;
  }
}
</style>
