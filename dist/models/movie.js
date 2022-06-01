"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = void 0;

require("core-js/modules/es.number.constructor.js");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Movie = _mongoose["default"].model("Movie", {
  title: String,
  rating: Number,
  year: Number
});

exports.Movie = Movie;