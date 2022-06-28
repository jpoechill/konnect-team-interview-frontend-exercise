<template>
  <ServiceCatalog @show-modal="showModal" />
  <ServicePagination />
  <ServiceModal v-show="isModalVisible" @close="hideModal" :serviceData="serviceData" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useServiceStore } from '@/stores/services'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'
import ServiceModal from '@/components/ServiceModal.vue';
import useServices from '@/composables/useServices'

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
    const isModalVisible = ref<boolean>(false);
    const serviceData = ref<object>({});

    serviceStore.services = services
    serviceStore.loading = loading

    function hideModal() {
      isModalVisible.value = false;
      document.body.style.overflow = 'unset';
    }

    function showModal(evt: any, data: object) {
      serviceData.value = data
      isModalVisible.value = true;
      document.body.style.overflow = 'hidden';
    }

    return {
      showModal,
      hideModal,
      isModalVisible,
      serviceData,
    }
  }
})
</script>
