// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   try {
//     const client = await MongoClient.connect(process.env.MONGO_URI);
//     const db = client.db();
//     const meetupsCollection = db.collection("meetups");
//     const meetups = await meetupsCollection.find({}).toArray();
//     console.log("meetups = ", meetups);
//     res.status(200).json({ meetups });
//     client.close();
//   } catch (error) {
//     console.log("error MongoClient", error);
//   }
// }
