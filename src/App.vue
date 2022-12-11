<template>
  <the-header></the-header>
  <img src="./images/hand-main.svg" alt="hand" class="hand-main" />
  <div class="main">
    <the-welcome></the-welcome>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheWelcome from './components/main/TheWelcome.vue';

export default {
  components: { TheHeader, TheWelcome },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: #211b12;
  max-width: 1280px;
  margin: 0 auto;
}

body {
  margin: 0;
}

.main {
  position: relative;
  margin: 0;
  display: flex;
  justify-content: center;
}

.hand-main {
  position: absolute;
  z-index: -1;
}
</style>
