'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('data.maybe');

var _data2 = _interopRequireDefault(_data);

var _data3 = require('data.either');

var _data4 = _interopRequireDefault(_data3);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = _ramda2.default.isEmpty;
var curry = _ramda2.default.curry;
var compose = _ramda2.default.compose;
var equals = _ramda2.default.equals;
var nth = _ramda2.default.nth;

/**
 *  Helpers Functions
 *
 *  ps: Don't need unit test.Functions already
 *  tested in others projects
 */

/*********************************Constructor********************************/

var Helpers = function Helpers() {};

// compareId :: String -> Object -> Boolean
var compareId = curry(function (id, obj) {
  return equals(id, obj.id);
});

/************************Functors******************************/

// map :: (ObjectA -> ObjectB), M -> M[ObjectB]
var map = _ramda2.default.curry(function (f, container) {
  return container.map(f);
});

// chain :: (ObjectA -> ObjectB), M -> ObjectB
var chain = _ramda2.default.curry(function (f, container) {
  return container.chain(f);
});

// join :: M -> M[M[ObjectA]] -> M[ObjectA]
var join = function join(container) {
  return container.join();
};

/***************************Loggers*****************************/

// trace :: String -> Object -> Object
var trace = _ramda2.default.curry(function (tag, x) {
  /*eslint no-console:0*/
  console.log(tag, x);
  return x;
});

/*****************************Events******************************/

// event :: String -> HTLMElement -> StreamEvent
var event = _ramda2.default.curry(function (evt, el) {
  return _rx2.default.Observable.fromEvent(el, evt);
});

// eventClick :: HTMLElement -> StreamClickEvent
var eventClick = event('click');

// createCustomEvent :: String -> Object -> Boolean -> Boolean -> CustomEvent
var createCustomEvent = curry(function (_name, _detail, _bubbles, _cancelable) {
  return new CustomEvent(_name, {
    detail: _detail,
    bubbles: _bubbles,
    cancelable: _cancelable
  });
});

// emitCustomEvent :: Component -> Event -> _
var emitCustomEvent = curry(function (obj, evt) {
  obj.dispatchEvent(evt);
});

/*********************************Arrays***********************************/

// head :: Array -> Maybe
var head = compose(_data2.default.fromNullable, nth(0));

// second :: Array -> Maybe
var second = compose(_data2.default.fromNullable, nth(1));

// isArrayEmpty :: Array -> Either
var isArrayEmpty = function isArrayEmpty(arr) {
  return isEmpty(arr) ? _data4.default.Left('No pwPinButton was found') : _data4.default.Right(arr);
};

/****************************************************************************/

Helpers.prototype.createCustomEvent = createCustomEvent;
Helpers.createCustomEvent = Helpers.prototype.createCustomEvent;

Helpers.prototype.emitCustomEvent = emitCustomEvent;
Helpers.emitCustomEvent = Helpers.prototype.emitCustomEvent;

Helpers.prototype.chain = chain;
Helpers.chain = Helpers.prototype.chain;

Helpers.prototype.map = map;
Helpers.map = Helpers.prototype.map;

Helpers.prototype.join = join;
Helpers.join = Helpers.prototype.join;

Helpers.prototype.trace = trace;
Helpers.trace = Helpers.prototype.trace;

Helpers.prototype.event = event;
Helpers.event = Helpers.prototype.event;

Helpers.prototype.eventClick = eventClick;
Helpers.eventClick = Helpers.prototype.eventClick;

Helpers.prototype.head = head;
Helpers.head = Helpers.prototype.head;

Helpers.prototype.second = second;
Helpers.second = Helpers.prototype.second;

Helpers.prototype.isArrayEmpty = isArrayEmpty;
Helpers.isArrayEmpty = Helpers.prototype.isArrayEmpty;

Helpers.prototype.compareId = compareId;
Helpers.compareId = Helpers.prototype.compareId;

exports.default = Helpers;

//# sourceMappingURL=index.js.map