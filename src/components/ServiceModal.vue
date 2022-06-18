<template>
  <div class="modal-backdrop">
    <div class="modal service">
      <header class="header-container">
        <a href="#">
          {{ serviceData.name }}
        </a>
        <button type="button" @click="$emit('close')" class="btn">
          <img src="/icon-close.svg" alt="Close Modal">
        </button>
      </header>
      <section>
        <p class="service-description">
          {{ serviceData.description }}    
        </p>
      </section>
      <footer>
        <div v-if="serviceData.versions" class="version-container">

          <span class="pill">
            {{ serviceData.versions.length }}
          </span> Versions
          <div class="version-spacer">
            <div v-for="(version, index) in serviceData.versions" :key="index" class="version-wrapper">
              {{ version.name.toLowerCase() }}
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['serviceData'],
  };
</script>

<style lang="scss">
.modal-backdrop {
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

.modal {
  background: #FFFFFF;
  border-radius: 3px;
  width: 420px;
}

.header-container {
  display: flex; 
  justify-content: space-between; 
  width: 100%;
}

.service {
  border-radius: 5px;
  padding: 20px 16px;
  display: flex;
  min-height: 100px;
  flex-wrap: wrap;
  align-content: space-between;

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
    margin-right: 3px;
    margin-bottom: 14px;
  }
}

.btn {
    border: none;
    padding: 0px;
    background: transparent;
    margin-bottom: 10px;

    &:hover {
        cursor: pointer;
    }
}

.version-container {
  margin-top:10px;
  font-size: 14px; 
  color: #333; 
}

.version-spacer {
  margin-top:10px
}

.version-wrapper {
  border: 1px solid #dbdbdb;
  padding: 4px;
  background-color: #fafafa;
  border-radius: 3px;
  display: inline-block;
  margin: 4px;
}
</style>