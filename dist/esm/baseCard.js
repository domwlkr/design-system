import { pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, renderSlot, withScopeId } from 'vue';
import { s as styleInject, r as registerComponent } from './index-6e65eb37.js';

var script = {
  name: 'BaseCard',
  props: {
    label: {
      type: String,
      "default": 'Label'
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-30051ee6");

pushScopeId("data-v-30051ee6");
const _hoisted_1 = { class: "base-card" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("h3", null, toDisplayString(_ctx.Title), 1),
    renderSlot(_ctx.$slots, "default")
  ]))
});

var css_248z = ".base-card[data-v-30051ee6] {\n  width: 100%;\n  text-align: left;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 20px #BF3F61;\n  padding: 1rem;\n}\n.base-input h3[data-v-30051ee6] {\n  color: #8C3264;\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 1rem;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-30051ee6";

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

export default Plugin;
export { script as BaseCard };
