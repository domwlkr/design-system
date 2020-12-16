import { pushScopeId, popScopeId, openBlock, createBlock, withScopeId } from 'vue';
import { s as styleInject, r as registerComponent } from './index-6e65eb37.js';

var script = {
  name: 'base-input'
};

const _withId = /*#__PURE__*/withScopeId("data-v-add609ce");

pushScopeId("data-v-add609ce");
const _hoisted_1 = { class: "base-input" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("input", _hoisted_1))
});

var css_248z = ".base-input[data-v-add609ce] {\n  border: 1px solid blue;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-add609ce";

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

export default Plugin;
export { script as BaseInput };
