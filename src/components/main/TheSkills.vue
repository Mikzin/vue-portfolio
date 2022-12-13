<template>
  <div class="stack">
    <h3 class="stack__title">Мои скиллы:</h3>
    <div class="stack__skills">
      <base-badge v-for="badge in badges" :key="badge">{{ badge }}</base-badge>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badges: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'Vue.js',
        // 'Vuex',
        // 'Vue Router',
        'Bootstrap',
        'npm',
        'Webpack',
        'REST Api',
        'git',
      ],
    };
  },
};
</script>

<style scoped>
.stack__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
}

.stack__skills {
  display: flex;
}
</style>
