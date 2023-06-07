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
  computed: {
    badges() {
      return this.$store.state.badges;
    },
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
  padding: 24px;
}

.stack__skills {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 700px) {
  .stack__skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .stack__title {
    margin: 0;
  }
}
</style>
