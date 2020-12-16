import BaseInput from "./BaseInput.vue"
import { registerComponent } from "./../../utils/plugins/index"

const Plugin = {
  install(vue) {
    registerComponent(vue, BaseInput)
  }
}

export default Plugin

export { BaseInput }