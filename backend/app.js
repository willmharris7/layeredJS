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

// Express demo server // 
const express = require("express");
const app = express();
  
// app.get("/", (req, res) => {
//    res.send("Hello World!!!!");
// });

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));
// run with 
  // npm run dev 

// Database //
// const {MongoClient} = require('mongodb');

// async function main() {
//   const uri = "mongodb+srv://first_test_user:im7p9hcVdHo5aS@cluster0.1m63c.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);

//   async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//   };

//   async function findListings(client, resultsLimit) {
//     const cursor = client
//       .db('sample_airbnb')
//       .collection('listingsAndReviews')
//       .find()
//       .limit(resultsLimit);
  
//     const results = await cursor.toArray();
//     if (results.length > 0) {
//       console.log(`Found ${results.length} listing(s):`);
//       results.forEach((result, i) => {
//         date = new Date(result.last_review).toDateString();
  
//         console.log();
//         console.log(`${i + 1}. name: ${result.name}`);
//         console.log(`   _id: ${result._id}`);
//         console.log(`   bedrooms: ${result.bedrooms}`);
//         console.log(`   bathrooms: ${result.bathrooms}`);
//         console.log(
//           `   most recent review date: ${new Date(
//             result.last_review
//           ).toDateString()}`
//         );
//       });
//     }
//   }
 
//   try {
//     await client.connect();
//     await listDatabases(client);
//     await findListings(client, 5);
//   } catch (e) {
//       console.error(e);
//   } finally {
//       await client.close();
//   }
// }

// main().catch(console.error);