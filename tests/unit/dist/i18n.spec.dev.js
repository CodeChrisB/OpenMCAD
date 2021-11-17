"use strict";

require("jest-expect-message");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//makes it easier to fill in missing
var formatted = false;
var masterLangName = 'en';
var LANGUAGES = [];
var masterLang = null;
describe('Compare i18n Files', function () {
  it('Json Compare', function () {
    var msg = '';
    return loadFiles().then(function () {
      SetMasterLanguage();
      LANGUAGES.forEach(function (lang) {
        var result = JsonCompare(lang.lang);

        if (result.found > 0) {
          msg += errorMessage(result, lang.name);
        }
      });
      expect(msg === msg, msg).toBeTruthy();
    });
  });
});

function errorMessage(result, otherName) {
  var text = '';

  if (result.notFound.length > 0) {
    text += ['Keys that were not found in ', otherName + '.js', '\n', '*'.repeat(36), '\n'].join('');
    text += formatMessage(result.notFound);
  }

  if (result.notInMain.length > 0) {
    text += ['\nUnkown Keys that were found in ', otherName + '.js', '\n', '*'.repeat(36), '\n'].join(' ');
    text += formatMessage(result.notInMain);
  }

  if (result.noPlural.length > 0) {
    text += ['\nMissing Plural in', otherName + '.js', '\n', '*'.repeat(36), '\n'].join(' ');
    text += formatMessage(result.noPlural);
  }

  text += ['\nFailed to validate [', otherName + '.js', ']', '\n'].join('');
  return text;
}

function formatMessage(error) {
  if (!formatted) return error.join('\n');
  var text = '';
  var currentHead = '';
  var data;
  error.forEach(function (line) {
    data = line.split('.');
    var value = data[data.length - 1];
    data.pop();
    var head = data.join('.');

    if (currentHead !== head) {
      currentHead = head;
      text += ['-->', head, '\n'].join(' ');
    }

    text += [value, ':\'\'', '\n'].join('');
  });
  return text;
}

function flattenJSON(data) {
  var result = {};

  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], prop + '[' + i + ']');
      }

      if (l === 0) {
        result[prop] = [];
      }
    } else {
      var isEmpty = true;

      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + '.' + p : p);
      }

      if (isEmpty && prop) {
        result[prop] = {};
      }
    }
  }

  recurse(data, '');
  return result;
}

function JsonCompare(otherJson) {
  var other = flattenJSON(otherJson);
  var notFound = [];
  var noPlural = [];
  Object.keys(masterLang).forEach(function (element) {
    if (other[element] === undefined) {
      notFound.push(element.slice(8));
    } else if (element.includes('common.') && String(masterLang[element]).includes('|') && !String(other[element]).includes('|')) {
      noPlural.push(element.slice(8));
    }
  });
  var notInMain = [];
  Object.keys(other).forEach(function (element) {
    if (masterLang[element] === undefined) {
      notInMain.push(element.slice(8));
    }
  });
  return {
    found: notFound.length + notInMain.length + noPlural.length,
    notFound: notFound,
    notInMain: notInMain,
    noPlural: noPlural
  };
}

var fs = require('fs');

function loadFiles() {
  var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

  return regeneratorRuntime.async(function loadFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          files = fs.readdirSync('./src/assets/i18n/', {
            withFileTypes: true
          }).filter(function (item) {
            return !item.isDirectory();
          }).map(function (item) {
            return item.name;
          });
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 4;

          _loop = function _loop() {
            var file;
            return regeneratorRuntime.async(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    file = _step.value;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                      return _interopRequireWildcard(require("".concat('@/assets/i18n/' + file.slice(0, 2))));
                    }).then(function (module) {
                      LANGUAGES.push({
                        lang: module,
                        name: file.slice(0, 2)
                      });
                    }));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          _iterator = files[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 13;
            break;
          }

          _context2.next = 10;
          return regeneratorRuntime.awrap(_loop());

        case 10:
          _iteratorNormalCompletion = true;
          _context2.next = 7;
          break;

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 19:
          _context2.prev = 19;
          _context2.prev = 20;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 22:
          _context2.prev = 22;

          if (!_didIteratorError) {
            _context2.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.finish(19);

        case 27:
          return _context2.abrupt("return", LANGUAGES);

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 15, 19, 27], [20,, 22, 26]]);
}

function SetMasterLanguage() {
  LANGUAGES.forEach(function (lang) {
    if (lang.name === masterLangName) {
      masterLang = flattenJSON(lang.lang);
    }
  });
}