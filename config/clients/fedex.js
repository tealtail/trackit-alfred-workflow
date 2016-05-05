'use strict';

const shipit = require('shipit');
const env = require('../environment');

module.exports = function(trackingNumber, cb) {

  const fedex = new shipit.FedexClient({
    key: env.get('fedex.key'),
    password: env.get('fedex.password'),
    account: env.get('fedex.account'),
    meter: env.get('fedex.meter')
  });

  fedex.requestData({ trackingNumber: trackingNumber }, function(error, body) {
    return cb(error, body);
  });
};
