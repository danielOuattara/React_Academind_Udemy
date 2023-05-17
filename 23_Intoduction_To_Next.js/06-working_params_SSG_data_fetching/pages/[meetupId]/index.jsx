import MeetupDetail from "@/components/meetups/MeetupDetail";
import { meetupsData } from "@/pages";

export default function MeetupDetailPage(props) {
  return <MeetupDetail {...props.meetupsData} />;
}

export async function getStaticPaths() {
  return {
    // paths: Array<string | { params: { [key: string]: string } }>,
    paths: ["/meetupId"],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      meetupsData: {
        image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SacX62h4-8njnPz4-_dMQwHaDr%26pid%3DApi&f=1&ipt=3b5b88b029d37458caa0ef6c7363df4660a0b5ffda077dbfe118aa443b00a142&ipo=images`,
        title: "meetup 1",
        address: "address meetup1",
        description: "meetup description here",
      },
    },
  };
  // fetch data for a single meetup
}
