<template>
  <button class="base-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="css" scoped>
@import "./basebutton.css";
</style>
