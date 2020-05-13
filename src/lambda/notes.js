const getDB = require('./getDB').default;

exports.handler = async () => {
  const db = getDB();
  try {
    const notesRef = db.collection('notes');
    const result = [];
    const snapshot = await notesRef.get();

    snapshot.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    throw e;
  }
};
