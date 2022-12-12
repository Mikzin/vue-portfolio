<template>
  <the-header></the-header>
  <img src="./images/hand-main.svg" alt="hand" class="hand-main" />
  <div class="main">
    <the-welcome></the-welcome>
    <base-container>
      <h2 class="projects__title">Последние проекты</h2>
      <base-container class="card__container">
        <base-card></base-card>
      </base-container>
    </base-container>
  </div>
  <base-container></base-container>
</template>

<script>
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheWelcome from './components/main/TheWelcome.vue';

export default {
  components: { TheHeader, TheWelcome, BaseContainer, BaseCard },
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
  flex-direction: column;
  align-items: center;
}

.hand-main {
  position: absolute;
  z-index: -1;
}

.projects__title {
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.03em;
  color: #bf7506;
  margin: 100px 0 0;
}
</style>
