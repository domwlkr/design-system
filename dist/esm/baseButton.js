import { pushScopeId, popScopeId, openBlock, createBlock, toDisplayString, withScopeId } from 'vue';
import { s as styleInject, r as registerComponent } from './index-6e65eb37.js';

var script = {
  name: 'base-button',
  props: {
    label: {
      type: String,
      "default": 'Button'
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-c46e269e");

pushScopeId("data-v-c46e269e");
const _hoisted_1 = { class: "base-button" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("button", _hoisted_1, toDisplayString($props.label), 1))
});

var css_248z = "\n.base-button[data-v-c46e269e] {\n  background-color: transparent;\n  border: 1px solid blue;\n  color: blue;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-c46e269e";

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

export default Plugin;
export { script as BaseButton };