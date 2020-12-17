'use strict';Object.defineProperty(exports,'__esModule',{value:true});var baseButton=require('./baseButton.js');require('vue'),require('./index-044a89aa.js');var baseInput=require('./baseInput.js');var components=/*#__PURE__*/Object.freeze({__proto__:null,BaseButton: baseButton['default'],BaseInput: baseInput['default']});var install = function install(instance) {
  for (var componentKey in components) {
    instance.use(components[componentKey]);
  }
};exports.BaseButton=baseButton['default'];exports.BaseInput=baseInput['default'];exports.default=install;