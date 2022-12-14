<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  width: 100%;
  margin: 20px;
}

@media screen and (max-width: 1040px) {
  .container {
    margin-top: 0;
  }
}
</style>
