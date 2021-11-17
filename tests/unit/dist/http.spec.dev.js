"use strict";

var _index = _interopRequireDefault(require("../../src/services/http/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var username = "admin@example.com";
var password = "t4mgLH45bHqnzA!";
var formUser = {
  loginCredential: username,
  password: password
};
test('the data is peanut butter', function () {
  return _index["default"].Login().login(formUser).then(function (data) {
    console.log(data);
    expect(CheckRequest(data)).toBeTruthy();
  });
});

function CheckRequest(req) {
  return _index["default"].error !== req;
}