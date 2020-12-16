'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),index=require('./index-044a89aa.js');var script = {
  name: 'base-input'
};const _withId = /*#__PURE__*/vue.withScopeId("data-v-add609ce");

vue.pushScopeId("data-v-add609ce");
const _hoisted_1 = { class: "base-input" };
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("input", _hoisted_1))
});var css_248z = ".base-input[data-v-add609ce] {\n  border: 1px solid blue;\n}\n";
index.s(css_248z);script.render = render;
script.__scopeId = "data-v-add609ce";var Plugin = {
  install: function install(vue) {
    index.r(vue, script);
  }
};exports.BaseInput=script;exports.default=Plugin;