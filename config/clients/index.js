'use strict';

const internals = {};

internals.clients = require('require-dir')();

module.exports = function(options, cb) {

  if (typeof internals.clients[options.carrier] !== 'function') {
    return cb(new Error('Unrecognized carrier: ' + options.carrier));
  }

  return internals.clients[options.carrier](options.query, cb);
};
