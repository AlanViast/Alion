;
(function() {
  'use strict';

  var Alion = {}
  Alion.Set = function() {};

  Alion.Set.prototype = {
    elements: [],
    add: function() {
      var targetArr = this;
      var arg = this._toArray(arguments);
      arg.forEach(function(value) {
        if (!targetArr.contains(value)) {
          targetArr.push(value);
        }
      });
    },
    push: function(item) {
      this.elements.push(item);
    },
    remove: function() {
      var arg = this._toArray(arguments);
      this.elements = this.elements.filter(function(value) {
        return -1 === arg.indexOf(value);
      });
    },
    contains: function(item) {
      return -1 !== this.elements.indexOf(item);
    },
    toList: function() {
      return this._toArray(this.elements);
    },
    size: function() {
      return this.elements.length;
    },
    forEach: function(fn) {
      this.elements.forEach(fn);
    },
    _toArray: function(args) {
      var arg = Array.prototype.slice.call(args);
      return arg;
    }
  };
  window.Alion = Alion;
})();