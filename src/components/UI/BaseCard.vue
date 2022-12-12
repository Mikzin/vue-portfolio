<template>
  <div class="card">
    <img :src="project.image" class="card__image" />
    <h3 class="card__title">{{ project.title }}</h3>
    <div class="card__badges">
      <base-badge v-for="badge in project.badges" :key="badge">{{
        badge
      }}</base-badge>
    </div>
    <p class="card__description">
      {{ project.description }}
    </p>
    <div class="card__buttons">
      <base-button class="card__button">
        <img src="../../images/code.svg" class="button-image" />
        <a :href="project.codeLink" target="blank">Код</a>
      </base-button>
      <base-button class="card__button">
        <img src="../../images/demo.svg" class="button-image" />
        <a :href="project.demoLink" target="blank">Демо</a>
      </base-button>
    </div>
  </div>
</template>

<script>
import Omnifood from '../../images/omnifood.png';

export default {
  props: ['title', 'description', 'badge'],
  data() {
    return {
      // badges: ['HTML', 'CSS', 'VUE'],
      project: {
        title: 'Omnifood',
        description: 'Omnifood это проект о доставке здоровой еды',
        badges: ['HTML', 'CSS', 'JavaScript'],
        image: Omnifood,
        codeLink: 'https://github.com/Mikzin/omnifood',
        demoLink: 'https://mikzin.github.io/omnifood/',
      },
    };
  },
};
</script>

<style scoped>
.card {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 399px;
}

.card__badges {
  display: flex;
  gap: 4px;
}

.card__buttons {
  display: flex;
  gap: 16px;
}

a {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #211b12;
}

.card__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #bf7506;
  margin: 16px 0 8px;
}

.card__description {
  margin: 16px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
