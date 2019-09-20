const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
/**
* An HTTP endpoint that acts as a webhook for Slack message.channels event
* @param {object} event Slack message.channels event body (raw)
* @returns {object} result The result of your workflow steps
*/
module.exports = async (event) => {

  // Prepare workflow object to store API responses
  
  let result = {};
  let phrase = "set the channel topic:"
  let oldTopic;
  
  if(event.event.text.indexOf(phrase) === -1) {
    return;
  } else {
    oldTopic = event.event.text.slice(36);
  }
  // [Workflow Step 1]
  
  console.log(`Running slack.users[@0.3.21].retrieve()...`);
  
  result.step1 = {};
  result.step1.user = await lib.slack.users['@0.3.21'].retrieve({
    user: `${event.event.user}`
  });
  
  // [Workflow Step 2]
  
  console.log(`Running slack.conversations[@0.2.3].info()...`);
  
  result.step2 = {};
  result.step2.channel = await lib.slack.conversations['@0.2.3'].info({
    id: `${event.event.channel}`
  });
  
  // [Workflow Step 3]
  
  console.log(`Running airtable.query[@0.3.4].select()...`);
  
  result.step3 = {};
  result.step3.selectQueryResult = await lib.airtable.query['@0.3.4'].select({
    table: `Topics`,
    where: [
      {
        'Channel__is': `#${result.step2.channel.name}`
      }
    ],
    limit: {
      'count': 0,
      'offset': 0
    }
  });
  
  // [Workflow Step 4]
  
  
  result.step4 = {};
  if(oldTopic !== result.step3.selectQueryResult.rows[0].fields.Topic) {
    result.step4.results = await lib.slack.channels['@0.6.0'].setTopic({
      channel: `${result.step3.selectQueryResult.rows[0].fields.Channel}`,
      topic: `${result.step3.selectQueryResult.rows[0].fields.Topic}`
    });
  };

  return result;
};