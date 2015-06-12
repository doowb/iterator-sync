/*!
 * iterator-sync <https://github.com/doowb/iterator-sync>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Iterate over a stack of functions passing the results of
 * each function to the next function in the stack.
 *
 * @param  {Array} `stack` Array of functions to call.
 * @return {Function} Returns a function that will iterator over the given stack of functions.
 * @api public
 * @name  iterator
 */

module.exports = function iteratorSync(stack) {
  var self = this;
  return function () {
    var results = null;
    var len = stack.length, i = 0;
    while (len--) {
      var fn = stack[i++];
      var args = i === 1 ? arguments : [results];
      results = fn.apply(self, args);
    }
    return results;
  };
};
