import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';
import { s as styleInject, r as registerComponent } from './index-6e65eb37.js';

var script = {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      "default": 'Label'
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-220f81ea");

pushScopeId("data-v-220f81ea");
const _hoisted_1 = { class: "base-input" };
const _hoisted_2 = /*#__PURE__*/createVNode("input", null, null, -1);
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("label", null, toDisplayString($props.label), 1),
    _hoisted_2
  ]))
});

var css_248z = ".base-input[data-v-220f81ea] {\n  width: 100%;\n  text-align: left;\n}\n.base-input label[data-v-220f81ea] {\n  color: #8C3264;\n  display: block;\n  font-weight: 600;\n  font-size: .875rem;\n}\n.base-input input[data-v-220f81ea] {\n  border: 1px solid #281B59;\n  border-radius: .25rem;\n  color: #8C3264;\n  padding: .5rem 1rem;\n  font-size: 1rem;\n  width: 100%;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-220f81ea";

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

export default Plugin;
export { script as BaseInput };
