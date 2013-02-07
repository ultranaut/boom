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

  var circuit = {
    propagate: function (uid, value) {
      console.log(arguments);
    }
  };


  /**
   * public properties and methods
   */


  /**
   * Relay
   */
  var Relay = boom.Relay = function () {
    if (!(this instanceof Relay)) {
      return new Relay();
    }
    this._uid    = _getId();
    this._power  = 0;
    this._input  = 0;
  };
  Relay.prototype = {
    _setPower: function (value) {
      this._power = value;
      this._output();
      return this;
    },
    powerUp: function () {
      this._power = 1;
      this.output();
      return this;
    },
    powerDown: function () {
      this._power = 0;
      this.output();
      return this;
    },
    output: function () {
      circuit.propagate(this, this._input && this._power);
    },
    setHigh: function () {
      this._input = 1;
      this.output();
      return this;
    },
    setLow: function () {
      this._input = 0;
      this.output();
      return this;
    }
  };

  return boom;
}());
