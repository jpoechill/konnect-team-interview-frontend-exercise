<template>
  <div>
    <div v-if="list.length > itemsPerPage" class="pagination">
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
import { defineComponent } from 'vue'
// import { useServiceStore } from '@/stores/services'
import { mapState } from 'pinia'

export default defineComponent({
  name: 'ServicePagination',
  data () {
    return {
      list: [1,2,3,4,5,6,7,8,9,10,12,13,14],
      currPage: 1,
      itemsPerPage: 12
    }
  },
  computed: {
    // ...mapState(useServiceStore, ['currPage', 'itemsPerPage']),
    calcPageRange (): string {
      let totalItems = this.list ? this.list.length : 0;
      let trimStart = (this.currPage - 1) * this.itemsPerPage
      let trimEnd = trimStart + this.itemsPerPage

      if (trimEnd >= totalItems) {
        trimEnd = totalItems
      }

      return  + trimStart + ' – ' + --trimEnd + ' of ' + --totalItems
    },
  },
  methods: {
    pageLeft() {
      if (this.currPage > 1) {
        // this.serviceStore.decrementPage()
      }
    },
    pageRight() {
      if (this.currPage < Math.ceil(this.list ? this.list.length/this.itemsPerPage : 0)) {
        // this.serviceStore.incrementPage()
      }
    }
  }
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
