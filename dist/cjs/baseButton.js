'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),index=require('./index-044a89aa.js');var script = {
  name: 'base-button',
  props: {
    label: {
      type: String,
      "default": 'Button'
    }
  }
};const _withId = /*#__PURE__*/vue.withScopeId("data-v-c46e269e");

vue.pushScopeId("data-v-c46e269e");
const _hoisted_1 = { class: "base-button" };
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("button", _hoisted_1, vue.toDisplayString($props.label), 1))
});var css_248z = "\n.base-button[data-v-c46e269e] {\n  background-color: transparent;\n  border: 1px solid blue;\n  color: blue;\n}\n";
index.s(css_248z);script.render = render;
script.__scopeId = "data-v-c46e269e";var Plugin = {
  install: function install(vue) {
    index.r(vue, script);
  }
};exports.BaseButton=script;exports.default=Plugin;