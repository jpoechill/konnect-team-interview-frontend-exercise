<template>
  <ServiceCatalog @show-modal="showModal" />
  <ServicePagination />
  <ServiceModal v-show="isModalVisible" @close="hideModal" :serviceData="serviceData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useServiceStore } from '@/stores/services'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'
import useServices from '@/composables/useServices'
import ServiceModal from '@/components/ServiceModal.vue';

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    ServicePagination,
    ServiceModal
  },
  setup() {
    const { services, loading } = useServices()
    const serviceStore = useServiceStore()

    serviceStore.services = services
    serviceStore.loading = loading
  },
  data() {
    return {
      isModalVisible: false,
      serviceData: {}
    };
  },
  methods: {
    showModal(evt: any, data: object) {
      this.serviceData = data
      this.isModalVisible = true;
      document.body.style.overflow = 'hidden';
    },
    hideModal() {
      this.isModalVisible = false;
      document.body.style.overflow = 'unset';
    },
  }
})
</script>
