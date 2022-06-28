<template>
  <ServiceCatalog @show-modal-info="handleShowModalInfo" @show-modal-new="handleShowModalNew" />
  <ServicePagination />
  <ServiceInfoModal v-show="showInfoModal" @close="hideModals" :serviceData="serviceData" />
  <ServiceAddNew v-show="showNewServiceModal"  @close="hideModals" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useServiceStore } from '@/stores/services'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import ServicePagination from '@/components/ServicePagination.vue'
import ServiceInfoModal from '@/components/modals/ServiceInfoModal.vue';
import ServiceAddNew from '@/components/modals/ServiceNewModal.vue';
import useServices from '@/composables/useServices'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    ServicePagination,
    ServiceInfoModal,
    ServiceAddNew
  },
  setup() {
    const { services, loading } = useServices()
    const serviceStore = useServiceStore()
    const showInfoModal = ref<boolean>(false);
    const showNewServiceModal = ref<boolean>(false);
    const serviceData = ref<object>({});

    serviceStore.services = services
    serviceStore.loading = loading

    function hideModals() {
      // close all modals
      showInfoModal.value = false;
      showNewServiceModal.value = false;
      document.body.style.overflow = 'unset';
    }

    function handleShowModalInfo(evt: any, data: object) {
      serviceData.value = data
      showInfoModal.value = true;
      document.body.style.overflow = 'hidden';
    }

    function handleShowModalNew() {
      showNewServiceModal.value = true;
      document.body.style.overflow = 'hidden';
    }

    return {
      handleShowModalInfo,
      handleShowModalNew,
      showInfoModal,
      showNewServiceModal,
      hideModals,
      serviceData,
    }
  }
})
</script>
