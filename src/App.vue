<template>
  <header>
    <div class="nav">
      <div>
        <router-link to="/">
          <img src="/konnect-logo.svg" class="logo" alt="Konnect Logo">
        </router-link>
      </div>
      <div>
        <img src="/icon-bell.svg" class="icon" alt="Notifications Icon">
        <img src="/icon-help.svg" class="icon" alt="Help Icon">
        <img src="/icon-user.png" class="icon user-prof" alt="User Profile Picture">
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: { RouterView },
})
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  font-size: 10px;
}

body {
  font-family: Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0 auto;
}

main {
  margin-top: 90px;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #E5E5E5;
  justify-content: space-between;
  display: flex;
  align-items: center;
  min-height: 60px;

  div {
    display: flex;
    align-items: center;
    padding: 0px 25px;

    .icon {
      margin-left: 20px;
    }

    .user-prof {
      border-radius: 50px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>