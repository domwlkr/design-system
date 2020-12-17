import { pushScopeId, popScopeId, openBlock, createBlock, withScopeId } from 'vue';

var script = {
  name: 'BaseInput'
};

const _withId = /*#__PURE__*/withScopeId("data-v-63a52cdc");

pushScopeId("data-v-63a52cdc");
const _hoisted_1 = { class: "base-input" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("input", _hoisted_1))
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
script.__scopeId = "data-v-63a52cdc";

var registerComponent = function registerComponent(instance, component) {
  instance.component(component.name, component);
};

var Plugin = {
  install: function install(vue) {
    registerComponent(vue, script);
  }
};

export default Plugin;
export { script as BaseInput };
