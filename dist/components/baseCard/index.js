(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseCard = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

  var script = {
    name: 'BaseCard',
    props: {
      title: {
        type: String,
        "default": 'Card title'
      }
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-526b0744");

  vue.pushScopeId("data-v-526b0744");
  const _hoisted_1 = { class: "base-card" };
  vue.popScopeId();

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createVNode("h3", null, vue.toDisplayString($props.title), 1),
      vue.renderSlot(_ctx.$slots, "default")
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

  var css_248z = ".base-card {\n  width: 100%;\n  text-align: left;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 20px #BF3F61;\n  padding: 1rem;\n}\n\n.base-card h3 {\n  color: #8C3264;\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 1rem;\n}\n";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-526b0744";

  var registerComponent = function registerComponent(instance, component) {
    instance.component(component.name, component);
  };

  var Plugin = {
    install: function install(vue) {
      registerComponent(vue, script);
    }
  };

  exports.BaseCard = script;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
