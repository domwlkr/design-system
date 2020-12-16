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