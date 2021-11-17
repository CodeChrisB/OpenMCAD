"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vHotkey = _interopRequireDefault(require("v-hotkey"));

var _vueLocalstorage = _interopRequireDefault(require("vue-localstorage"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vHotkey["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$axios = _axios["default"];

_vue["default"].use(_vueLocalstorage["default"]);

_vue["default"].prototype.localStorage = _vueLocalstorage["default"];

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueLocalstorage["default"], {
  name: "ls",
  bind: true
});

describe('Prototype Functions', function () {
  it('Axios is active', function () {
    expect(_axios["default"]).not.toBeNull();
  });
  it('Vue is active', function () {
    expect(_vue["default"]).not.toBeNull();
  });
  it('VueHotkey is active', function () {
    expect(_vueRouter["default"]).not.toBeNull();
  });
  it('VueLocalStorage is active', function () {
    expect(_vueLocalstorage["default"]).not.toBeNull();
  });
  it('VueRouter is active', function () {
    expect(_vueRouter["default"]).not.toBeNull();
  });
  it('Localstorage Set', function () {
    _vue["default"].localStorage.set('unit:test', 'test');

    expect(true).toBeTruthy();
  });
  it('Localstorage Get', function () {
    var data = _vue["default"].localStorage.get('unit:test');

    expect(data === 'test').toBeTruthy();
  });
  it('Localstorage Remove', function () {
    _vue["default"].localStorage.remove('unit:test');

    var data = _vue["default"].localStorage.get('unit:test');

    expect(data === null).toBeTruthy();
  });
});