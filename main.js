'use strict';

const moment = require('moment');
const AlfredNode = require('alfred-workflow-nodejs');
const guessCarrier = require('shipit').guessCarrier;
const clients = require('./config/clients');

const actionHandler = AlfredNode.actionHandler;
const workflow = AlfredNode.workflow;
const Item = AlfredNode.Item;

workflow.setName('trackit-alfred-workflow');

function buildItems(err, data) {
  const recent = data.activities[0];

  const recentItem = new Item({
    title: recent.details,
    subtitle: `${moment(recent.timestamp).fromNow()} (${recent.location})`,
    icon: AlfredNode.ICONS.INFO
  });

  const etaItem = new Item({
    title: `Arrives ${moment(data.eta).calendar().replace(' at ', ' by ')}`,
    icon: AlfredNode.ICONS.CLOCK
  });

  workflow.addItem(recentItem);
  workflow.addItem(etaItem);
  workflow.feedback();
}

(function main() {
  actionHandler.onAction('track', function(query) {
    const carrier = guessCarrier(query)[0];

    const options = {
      carrier: carrier,
      query: query
    };

    clients(options, buildItems);
  });

  AlfredNode.run();
})();
