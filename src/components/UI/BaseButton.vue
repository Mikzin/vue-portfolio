<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style scoped>
.button {
  border: none;
  border-bottom: 2px solid #bf7506;
  background: #fff;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 7px 8px;
}

.button:hover {
  background-color: #bf7506;
}
</style>
