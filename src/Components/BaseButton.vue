<template>
  <button class="base-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'base-button',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  background-color: transparent;
  border: 1px solid blue;
  color: blue;
}
</style>