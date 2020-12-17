'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue'),index=require('./index-044a89aa.js');var script = {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      "default": 'Label'
    }
  }
};const _withId = /*#__PURE__*/vue.withScopeId("data-v-220f81ea");

vue.pushScopeId("data-v-220f81ea");
const _hoisted_1 = { class: "base-input" };
const _hoisted_2 = /*#__PURE__*/vue.createVNode("input", null, null, -1);
vue.popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
    vue.createVNode("label", null, vue.toDisplayString($props.label), 1),
    _hoisted_2
  ]))
});var css_248z = ".base-input[data-v-220f81ea] {\n  width: 100%;\n}\n.base-input label[data-v-220f81ea] {\n  color: #8C3264;\n  display: block;\n  font-weight: 600;\n  font-size: .875rem;\n}\n.base-input input[data-v-220f81ea] {\n  border: 1px solid #281B59;\n  color: #010326;\n  padding: .5rem 1rem;\n  font-size: 1rem;\n}\n";
index.s(css_248z);script.render = render;
script.__scopeId = "data-v-220f81ea";var Plugin = {
  install: function install(vue) {
    index.r(vue, script);
  }
};exports.BaseInput=script;exports.default=Plugin;