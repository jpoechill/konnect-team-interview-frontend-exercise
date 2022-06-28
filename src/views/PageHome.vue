<template>
  <ServiceCatalog @show-modal="showModal" />
  <ServicePagination />
  <ServiceModal v-show="isModalVisible" @close="hideModals" :serviceData="serviceData" />
  <ServiceAddNew v-show="showNewServiceModal"  @close="hideModals" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useServiceStore } from '@/stores/services'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'
import ServiceModal from '@/components/ServiceModal.vue';
import ServiceAddNew from '@/components/modals/ServiceNewModal.vue';
import useServices from '@/composables/useServices'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    ServicePagination,
    ServiceModal,
    ServiceAddNew
  },
  setup() {
    const { services, loading } = useServices()
    const serviceStore = useServiceStore()
    const isModalVisible = ref<boolean>(false);
    const showNewServiceModal = ref<boolean>(false);
    const serviceData = ref<object>({});

    serviceStore.services = services
    serviceStore.loading = loading

    function hideModals() {
      isModalVisible.value = false;
      showNewServiceModal.value = false
      document.body.style.overflow = 'unset';
    }

    function showModal(evt: any, data: object) {
      serviceData.value = data
      isModalVisible.value = true;
      document.body.style.overflow = 'hidden';
    }

    function handleShowModalNew() {
      showNewServiceModal.value = true;
      document.body.style.overflow = 'hidden';
    }

    return {
      showModal,
      showNewServiceModal,
      handleShowModalNew,
      hideModals,
      isModalVisible,
      serviceData,
    }
  }
})
</script>
