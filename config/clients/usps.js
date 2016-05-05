'use strict';

const shipit = require('shipit');
const env = require('../environment');

module.exports = function(trackingNumber, cb) {

  const usps = new shipit.UspsClient({
    userId: env.get('usps.userId')
  });

  usps.requestData({ trackingNumber: trackingNumber }, function(error, body) {
    return cb(error, body);
  });
};
