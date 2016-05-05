'use strict';

const convict = require('convict');

const config = convict({
  usps: {
    userId: {
      doc: 'USPS UserId',
      format: String,
      default: '',
      env: 'USPS_USER_ID'
    }
  },
  fedex: {
    key: {
      doc: 'Fedex key',
      format: String,
      default: '',
      env: 'FEDEX_KEY'
    },
    account: {
      doc: 'Fedex Account Number',
      format: String,
      default: '',
      env: 'FEDEX_ACCOUNT'
    },
    meter: {
      doc: 'Fedex Meter Number',
      format: String,
      default: '',
      env: 'FEDEX_METER'
    },
    password: {
      doc: 'Fedex API Password',
      format: String,
      default: '',
      env: 'FEDEX_PW'
    }
  }
});

config.validate();
module.exports = config;
