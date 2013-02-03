/*jshint bitwise:false */


var B = (function () {
  'use strict';
  var boom = {};

  /**
   * private properties and methods
   */
  var _uid = 0;
  var _getId = function () {
    return ++_uid;
  };
  var _propagate = function (uid, value) {
    console.log(arguments);
  };

  /**
   * public properties and methods
   */
  var relay = boom.Relay = function () {
    this._uid = _getId();
    this._input = 0;
    this._power = 0;
  };
  relay.prototype = {
    output: function () {
      return this._input & this._power;
    },
    setHigh: function () {
      this._input = 1;
      _propagate(this._uid, this.output());
      return this;
    },
    setLow: function () {
      this._input = 0;
      _propagate(this._uid, this.output());
    },
    hasPower: function () {
      return this._power;
    },
    powerOn: function () {
      this._power = 1;
      return this;
    }
  };

  return boom;
}());
