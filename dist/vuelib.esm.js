import { pushScopeId, popScopeId, openBlock, createBlock, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      "default": 'Button'
    }
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-c851558c");

pushScopeId("data-v-c851558c");
const _hoisted_1 = { class: "base-button" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("button", _hoisted_1, toDisplayString($props.label), 1))
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

var css_248z = "\n.base-button[data-v-c851558c] {\n  background-color: transparent;\n  border: 1px solid blue;\n  color: blue;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-c851558c";

var registerComponent = function registerComponent(instance, component) {
  instance.component(component.name, component);
};

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

var script$1 = {
  name: 'BaseInput'
};

const _withId$1 = /*#__PURE__*/withScopeId("data-v-63a52cdc");

pushScopeId("data-v-63a52cdc");
const _hoisted_1$1 = { class: "base-input" };
popScopeId();

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("input", _hoisted_1$1))
});

var css_248z$1 = ".base-input[data-v-63a52cdc] {\n  border: 1px solid blue;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-63a52cdc";

var Plugin$1 = {
  install: function install(vue) {
    registerComponent(vue, script$1);
  }
};

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BaseButton: Plugin,
  BaseInput: Plugin$1
});

var install = function install(instance) {
  for (var componentKey in components) {
    instance.use(components[componentKey]);
  }
};

export default install;
export { Plugin as BaseButton, Plugin$1 as BaseInput };
