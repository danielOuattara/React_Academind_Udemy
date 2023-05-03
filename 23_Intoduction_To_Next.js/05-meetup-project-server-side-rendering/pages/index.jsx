import MeetupsList from "@/components/meetups/MeetupsList";

export const meetupsData = [
  {
    id: 1,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SacX62h4-8njnPz4-_dMQwHaDr%26pid%3DApi&f=1&ipt=3b5b88b029d37458caa0ef6c7363df4660a0b5ffda077dbfe118aa443b00a142&ipo=images",
    title: "meetup 1",
    address: "address meetup1",
    description: "meetup description here",
  },
  {
    id: 2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.agy_IlyZ_8OV179rzhrNYgHaDN%26pid%3DApi&f=1&ipt=cc5d0443cfb911dda834c3b9bb7f35af1216fed3d0cdbbeea6cdbb0a5cd150bb&ipo=images",
    title: "meetup 2",
    address: "address meetup2",
    description: "meetup description here",
  },
  {
    id: 3,
    image: "https://personalexcellence.co/files/meetup-website.jpg",
    title: "meetup 3",
    address: "address meetup3",
    description: "meetup description here",
  },
];

export default function HomePage(props) {
  return (
    <>
      <h1>Home Page</h1>
      <MeetupsList meetupsList={props.meetupsData} />
    </>
  );
}

export async function getStaticProps() {
  // this function is executed first among others before the pre-rendering process
  // execute code that will normally run on server during the build process

  return {
    props: { meetupsData },
    revalidate: 20, // unlocks incremental static generation
  };
}
