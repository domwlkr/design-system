import BaseButton from "./BaseButton.vue"
import { registerComponent } from "./../../utils/plugins/index"

const Plugin = {
  install(vue) {
    registerComponent(vue, BaseButton)
  }
}

export default Plugin

export { BaseButton }