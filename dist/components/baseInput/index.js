(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseInput = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'base-input'
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-add609ce");

  vue.pushScopeId("data-v-add609ce");
  const _hoisted_1 = { class: "base-input" };
  vue.popScopeId();

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("input", _hoisted_1))
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".base-input {\n  border: 1px solid blue;\n}\n";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-add609ce";

  var registerComponent = function registerComponent(instance, component) {
    instance.component(component.name, component);
  };

  var Plugin = {
    install: function install(vue) {
      registerComponent(vue, script);
    }
  };

  exports.BaseInput = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
