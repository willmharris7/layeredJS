// Original demo server //

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Imports // 
const express = require("express");
const {MongoClient} = require('mongodb');
// Definitions //
const app = express();
const PORT = process.env.PORT || 8080;
const uri = "mongodb+srv://first_test_user:im7p9hcVdHo5aS@cluster0.1m63c.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
// Helper functions //
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();
  // console.log("Databases:");
  // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  databaseNamesList = []
  databasesList.databases.forEach(db => databaseNamesList.push(db.name))
  return databaseNamesList
};
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
app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));

async function main() {

  async function findListings(client, resultsLimit) {
    const cursor = client
      .db('sample_airbnb')
      .collection('listingsAndReviews')
      .find()
      .limit(resultsLimit);
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();
  
        console.log();
        console.log(`${i + 1}. name: ${result.name}`);
        console.log(`   _id: ${result._id}`);
        console.log(`   bedrooms: ${result.bedrooms}`);
        console.log(`   bathrooms: ${result.bathrooms}`);
        console.log(
          `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
        );
      });
    }
  }
 
  try {
    // await client.connect();
    // await listDatabases(client);
    // await findListings(client, 5);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);