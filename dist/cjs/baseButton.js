'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),index=require('./index-044a89aa.js');var script = {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      "default": 'Button'
    }
  }
};const _withId = /*#__PURE__*/vue.withScopeId("data-v-c851558c");

vue.pushScopeId("data-v-c851558c");
const _hoisted_1 = { class: "base-button" };
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("button", _hoisted_1, vue.toDisplayString($props.label), 1))
});var css_248z = "\n.base-button[data-v-c851558c] {\n  background-color: transparent;\n  border: 1px solid #F24957;\n  color: #F24957;\n  padding: .5rem 1rem;\n  width: 100%;\n}\n";
index.s(css_248z);script.render = render;
script.__scopeId = "data-v-c851558c";var Plugin = {
  install: function install(vue) {
    index.r(vue, script);
  }
};exports.BaseButton=script;exports.default=Plugin;