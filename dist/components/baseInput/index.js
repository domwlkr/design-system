(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseInput = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'BaseInput',
    props: {
      label: {
        type: String,
        "default": 'Label'
      }
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-220f81ea");

  vue.pushScopeId("data-v-220f81ea");
  const _hoisted_1 = { class: "base-input" };
  const _hoisted_2 = /*#__PURE__*/vue.createVNode("input", null, null, -1);
  vue.popScopeId();

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createVNode("label", null, vue.toDisplayString($props.label), 1),
      _hoisted_2
    ]))
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

  var css_248z = ".base-input {\n  width: 100%;\n  text-align: left;\n}\n\n.base-input label {\n  color: #8C3264;\n  display: block;\n  font-weight: 600;\n  font-size: .875rem;\n}\n\n.base-input input {\n  border: 1px solid #281B59;\n  border-radius: .25rem;\n  color: #8C3264;\n  padding: .5rem 1rem;\n  font-size: 1rem;\n  width: 100%;\n}\n";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-220f81ea";

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
