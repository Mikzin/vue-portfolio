<template>
  <div class="card">
    <img :src="image" class="card__image" />
    <h3 class="card__title">{{ title }}</h3>
    <div class="card__badges">
      <base-badge v-for="badge in badges" :key="badge">{{ badge }}</base-badge>
    </div>
    <p class="card__description">
      {{ description }}
    </p>
    <div class="card__buttons">
      <base-button class="card__button">
        <img src="../../images/code.svg" class="button-image" />
        <a :href="codeLink" target="blank">Код</a>
      </base-button>
      <base-button class="card__button">
        <img src="../../images/demo.svg" class="button-image" />
        <a :href="demoLink" target="blank">Демо</a>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'badges', 'image', 'codeLink', 'demoLink'],
};
</script>

<style scoped>
.card {
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
  margin: 16px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.card__image {
  max-width: 399px;
  height: 299px;
  background-size: cover;
  background-position: center;
}
</style>
