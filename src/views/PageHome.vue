<template>
  <ServiceCatalog />
  <ServicePagination :list="filteredServices" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    ServicePagination
  },
})
</script>
