"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.freeze.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _apolloServer = require("apollo-server");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServer.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type Movie {\n    _id: ID!\n    title: String!\n    rating: Float!\n    year: Int!\n  }\n\n  type Query {\n    getMovies: [Movie!]!,\n    getMovie(id: ID!): Movie!\n  }\n\n  type Mutation {\n    createMovie(title: String!, rating: Float!, year: Int!): Movie!\n  }\n"])));
exports.typeDefs = typeDefs;