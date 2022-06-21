<template>
  <div class="service-catalog">
    <div class="service-heading">
      <h1>Service Catalog</h1>
      <div>
        <button>Add New Service</button>
      </div>
    </div>
    <input type="text" :value="serviceStore.searchTerms" @input="debounce(handleDebounce($event))" class="input-search" placeholder="Search" aria-label="Search Services">
    
    <!-- Loading State, Empty State, List Items -->
    <div v-if="serviceStore.loading" class="no-search-results">
      <div class="catalog">
        <div v-for="n in 8" :key="n" class="service-loading">
          <div class="text-line"></div>
          <div class="text-line"></div>
          <div class="text-line"></div>
          <div class="text-line"></div>
          <div class="text-line"></div>
          <div class="text-line"></div>
        </div>
      </div>
    </div>
    <div v-else-if="!getFilteredPagination.length" class="no-search-results">
      No search results found. Maybe try different words?
    </div>
    <ul v-else class="catalog">
      <li @click="$emit('showModal', $event, service)" v-for="service in getFilteredPagination" :key="service.id" class="service">
        <div>
          <a href="#">
           {{ service.name }}
          </a>
          <p class="service-description">
            {{ service.description }}
          </p>
        </div>
        <div>
          <div class="version-container">
            <span class="pill">
            {{ service.versions.length }}
            </span> Versions
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useServiceStore } from '../stores/services'
import createDebounce from '@/composables/useDebounce'
import { mapState } from 'pinia'

export default defineComponent({
  name: 'ServiceCatalog',
  setup() {
    const serviceStore = useServiceStore()

    return {
      serviceStore,
      debounce: createDebounce(),
    }
  },
  computed: {
    ...mapState(useServiceStore, ['getFilteredPagination']),
  },
  methods: {
    handleDebounce (event: any) {
      return () => {
        this.serviceStore.searchTerms = event.target.value 
        this.serviceStore.currPage = 1
      }
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/foil-loader.scss';
@import '@/assets/responsive-grid.scss';

h1 {
  margin-top: 0px;
  font-size: 24px;
  color: #0A2B66;
  font-family: 'Roboto', 'Open Sans', 'Helvetica Neue';
  font-weight: 500;
}

.service-catalog {
  max-width: 940px;
  margin: 2rem auto;
  margin-bottom: 18px;
  padding: 0 20px;
}

.catalog {
  list-style: none;
  padding: 0px;
  display: grid;
  column-gap: 20px;
}

.service {
  height: 180px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  padding: 20px 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin-bottom: 30px;

  a {
    margin-top: 0px;
    color: #1456CB;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
  }

  p {
    color: #8C8C8C;
    font-size: 14px;
    width: 100%;
  }

  .pill {
    display: inline;
    border: 1px solid #D9E7FF;
    padding: 4px 10px;
    border-radius: 40px;
    font-size: 13px;
    color: #1456CB;
    margin-right: 3px;
  }
}

.service:hover {
  border-color: #A6C6FF;
  cursor: pointer;
}

.service-loading {
  height: 180px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  padding: 20px 16px;
  margin-bottom: 30px;
}

.input-search {
  background: url(/icon-magnify.svg) no-repeat scroll 12px 14px;
  border: 1px solid #EAEAEA;
  border-radius: 3px;
  padding: 12px;
  padding-left: 40px;
  font-size: 16px;
  min-width: 15%;
  margin-top: 4px;
}

.service-heading {
  display: flex;
  justify-content: space-between;
}

button {
  font-size: 16px;
  color: #FFF;
  padding: 12px;
  background-color: #1456CB;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.version-container {
  font-size: 14px;
}

.service-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.no-search-results {
  color: #8C8C8C;
  font-size: 14px;
  margin: 16px auto;
  text-align: center;
}
</style>
