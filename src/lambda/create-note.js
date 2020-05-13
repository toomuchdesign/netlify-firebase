const getDB = require('./getDB').default;

exports.handler = async (event, context, callback) => {
  const db = getDB();
  const note = event.queryStringParameters.note || 'Empty';
  try {
    await db.collection('notes').add({
      note,
    });

    return {
      statusCode: 200,
      body: `Note added: ${note}`,
    };
  } catch (e) {
    throw e;
  }
};
