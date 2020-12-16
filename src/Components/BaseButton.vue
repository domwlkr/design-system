<template>
  <button class="base-button">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class BaseButton extends Vue {
  @Prop() private label: string = 'Click me'
}
</script>

<style lang="scss" scoped>
.base-button {
  background-color: transparent;
  border: 1px solid blue;
  color: blue;
}
</style>