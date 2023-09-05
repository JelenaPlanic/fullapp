// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/fullapp';
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Uspešna veza sa MongoDB');
  } catch (error) {
    console.error('Neuspela veza sa MongoDB:', error);
  }
};

const getCollection = (collectionName) => {
  return client.db().collection(collectionName);
};

module.exports = {
  connectToDatabase,
  getCollection,
};
