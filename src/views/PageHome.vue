<template>
  <ServiceCatalog />
  <ServicePagination />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useServiceStore } from '@/stores/services'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'
import useServices from '@/composables/useServices'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    ServicePagination
  },
  setup() {
    const { services, loading } = useServices()
    const serviceStore = useServiceStore()

    serviceStore.services = services
    serviceStore.loading = loading
  },
})
</script>
