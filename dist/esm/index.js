import Plugin from './baseButton.js';
export { default as BaseButton } from './baseButton.js';
import 'vue';
import './index-6e65eb37.js';
import Plugin$1 from './baseInput.js';
export { default as BaseInput } from './baseInput.js';

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BaseButton: Plugin,
  BaseInput: Plugin$1
});

var install = function install(instance) {
  for (var componentKey in components) {
    instance.user(components[componentKey]);
  }
};

export default install;
