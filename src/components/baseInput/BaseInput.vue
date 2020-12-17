<template>
  <div class="base-input">
    <label>{{ label }}</label>
    <input />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  }
}
</script>

<style lang="css" scoped>
@import "./baseinput.css";
</style>
