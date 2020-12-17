<template>
  <div class="base-card">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: 'Card title'
    }
  }
}
</script>

<style lang="css" scoped>
@import "./basecard.css";
</style>
