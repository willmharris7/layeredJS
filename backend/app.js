const express = require("express");
const {MongoClient} = require('mongodb');
const app = express();
const PORT = process.env.PORT || 8080;
const uri = "mongodb+srv://first_test_user:im7p9hcVdHo5aS@cluster0.1m63c.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Helper functions //
async function listDatabases(client){
  await client.connect()
  databasesList = await client.db().admin().listDatabases();
  databaseNamesList = []
  databasesList.databases.forEach(db => databaseNamesList.push(db.name))
  await client.close()
  return databaseNamesList
};

async function getTop5(client) {
  await client.connect()
  const cursor = client
      .db('sample_airbnb')
      .collection('listingsAndReviews')
      .find()
      .limit(5);
  fatResult = await cursor.toArray();
  skinnyResult = []
  for (const listing of fatResult) {
    skinnyResult.push(listing.name + " has " + listing.bedrooms + " bedrooms")
  }
  await  client.close()
  return skinnyResult
  
}
// Helper functions //

// App //
app.use(express.json()); // replaces bodyParser.json()

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/dbs', async function (req, res) {
  await client.connect()
  dbNames = await listDatabases(client)
  res.send({ express: dbNames });
});

app.get('/api/top5', async function (req, res) {
  await client.connect()
  top5Listings = await getTop5(client)
  res.send({ express: top5Listings });
});

app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
// App // 