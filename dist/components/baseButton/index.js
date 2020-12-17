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

var css_248z = "\n.base-button {\n  background-color: transparent;\n  border: 1px solid #F24957;\n  color: #F24957;\n  padding: .5rem 1rem;\n  width: 100%;\n}\n";
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

export default Plugin;
export { script as BaseButton };
