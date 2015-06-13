'use strict';

var assert = require('assert');
var iterator = require('./');

describe('iterator-sync', function () {
  it('should create an iterator function when given a stack', function () {
    var called = [];
    var stack = getStack(called);
    var fn = iterator(stack);
    assert.equal(typeof fn, 'function');
  });

  it('should iterate over a stack of functions', function () {
    var called = [];
    var stack = getStack(called);
    assert.deepEqual(iterator(stack)('foo', 'bar'), { foo: 'bar' });
    assert.deepEqual(called, ['a', 'b', 'c', 'd', 'e']);
  });
});

function getStack (called) {
  var stack = [
    function a (key, value) {
      called.push('a');
      var obj = {};
      obj[key] = value;
      return obj;
    },
    function b (obj) { called.push('b'); return obj; },
    function c (obj) { called.push('c'); return obj; },
    function d (obj) { called.push('d'); return obj; },
    function e (obj) { called.push('e'); return obj; }
  ];
  return stack;
}
