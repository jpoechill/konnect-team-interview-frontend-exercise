<template>
  <div class="modal-backdrop">
    <div class="modal service">
      <header class="header-container">
        <h3>
          Add New Service
        </h3>
        <button type="button" @click="handleCloseModal" class="btn">
          <img src="/icon-close.svg" alt="Close Modal">
        </button>
      </header>
      <section class="w-full">
        <div>
          <label for="serviceName">
            Service Name
          </label>
          <input type="text" v-model="serviceName" class="input-text w-full">
        </div>

        <div>
          <label for="serviceDescription">
            Service Description 
          </label>
          <textarea v-model="serviceDescription" class="w-full" rows="4"></textarea>
        </div>

        <div>
          <label for="versionNumber">
            Number of Versions
          </label>
          <input v-model="serviceVersion" type="number" class="input-text w-full">
        </div>
      </section>
      <footer class="w-full">
        <br>
        <button  @click="handleCloseModal" class="button-add-new w-full">
          Add New Service
        </button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    name: 'ServiceAddNew',
    setup(props: any, context: any) {
      const serviceName = ref('')
      const serviceDescription = ref('')
      const serviceVersion = ref(1)

      const handleCloseModal = () => context.emit('close');

      return {
        handleCloseModal,
        serviceName,
        serviceDescription,
        serviceVersion
      }
    }
  };
</script>

<style lang="scss">
.modal-backdrop {
  height: 100vh;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.w-full {
  width: 100%;
}

.modal {
  background: #FFFFFF;
  border-radius: 3px;
  width: 420px;
}

.header-container {
  display: flex; 
  justify-content: space-between; 
  width: 100%;
  
  h3 {
    margin: 0px;
    color: #0A2B66;
  }
}

section {
  label {
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 4px;
    color: #828FA3;
    display: block;
  }
}

.pb-sml {
  padding-bottom: 20px;
}

.input-text, textarea {
  border: 1px solid #EAEAEA;
  border-radius: 3px;
  padding: 12px;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Roboto', 'Open Sans', 'Helvetica Neue';
  box-sizing: border-box;
}

.button-add-new {
  font-size: 16px;
  color: #FFF;
  padding: 12px;
  margin-top: 10px;
  background-color: #1456CB;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

</style>