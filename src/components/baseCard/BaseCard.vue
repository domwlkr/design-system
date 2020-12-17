<template>
  <div class="base-card">
    <h3>{{ Title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style lang="css" scoped>
@import "./basecard.css";
</style>
