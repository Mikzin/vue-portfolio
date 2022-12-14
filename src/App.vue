<template>
  <the-header></the-header>
  <img src="./images/hand-main.svg" alt="hand" class="hand-main" />
  <div class="main">
    <the-welcome></the-welcome>
    <base-container id="portfolio">
      <h2 class="projects__title">Последние проекты:</h2>
    </base-container>
    <base-container>
      <base-carousel> </base-carousel>
    </base-container>
    <base-container>
      <the-about></the-about>
    </base-container>
    <base-container>
      <the-skills></the-skills>
    </base-container>
    <base-container>
      <the-footer></the-footer>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/UI/BaseContainer.vue';
import TheHeader from './components/layout/TheHeader.vue';
import TheWelcome from './components/main/TheWelcome.vue';
import BaseCarousel from './components/UI/BaseCarousel.vue';
import TheAbout from './components/main/TheAbout.vue';
import TheSkills from './components/main/TheSkills.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheWelcome,
    BaseContainer,
    BaseCarousel,
    TheAbout,
    TheSkills,
    TheFooter,
  },
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

.card__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 72px;
}
</style>
