const connectToDatabase = require("../db/db_connect");
const ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res) => {
  const db = await connectToDatabase(process.env.DB_NAME);
  const contacts = await db.collection("contacts").find().toArray();
  res.json(contacts);
};

module.exports = { getContacts };
