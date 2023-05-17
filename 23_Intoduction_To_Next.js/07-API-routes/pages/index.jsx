import MeetupsList from "@/components/meetups/MeetupsList";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return (
    <>
      <h1>Home Page</h1>
      <MeetupsList meetupsList={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        description: item.description,
        id: item._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
