<template>
  <div class="container">
    <div>
      <logo class="phoenix-logo" />
      <h1 class="title">
        Феникс
      </h1>
      <h2 class="subtitle">
        Тут будет новый сайт Феникса
      </h2>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/svg/logo.svg?inline'
export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.phoenix-logo {
  color: var(--c-red);
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
