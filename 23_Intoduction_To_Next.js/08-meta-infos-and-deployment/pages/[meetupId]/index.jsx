//---------------------------------------------- METHOD 1

// import MeetupDetail from "@/components/meetups/MeetupDetail";
// import { MongoClient, ObjectId } from "mongodb";

// export default function MeetupDetailPage(props) {
//   return <MeetupDetail {...props.meetup} />;
// }

// export async function getStaticPaths() {
//   return {
//     // paths: Array<string | { params: { [key: string]: string } }>,
//     paths: ["/meetupId"],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const client = await MongoClient.connect(process.env.MONGO_URI);
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const meetup = await meetupsCollection.findOne({
//     _id: new ObjectId(context.params.meetupId),
//   });
//   client.close();

//   const updatedMeetup = {
//     image: meetup.image,
//     title: meetup.title,
//     address: meetup.address,
//     description: meetup.description,
//     id: meetup._id.toString(),
//   };

//   return {
//     props: {
//       meetup: updatedMeetup,
//     },
//   };
// }

//------------------------------------------------------------ METHOD 2
// using getStaticPath and return a list of

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function MeetupDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title} meetup</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail {...props.meetup} />;
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsIdList = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    // paths: Array<string | { params: { [key: string]: string } }>,
    paths: meetupsIdList.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(context.params.meetupId),
  });
  client.close();

  const updatedMeetup = {
    image: meetup.image,
    title: meetup.title,
    address: meetup.address,
    description: meetup.description,
    id: meetup._id.toString(),
  };

  return {
    props: {
      meetup: updatedMeetup,
    },
  };
}
