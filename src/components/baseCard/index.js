import BaseCard from "./BaseCard.vue"
import { registerComponent } from "../../utils/plugins/index"

const Plugin = {
  install(vue) {
    registerComponent(vue, BaseCard)
  }
}

export default Plugin

export { BaseCard }