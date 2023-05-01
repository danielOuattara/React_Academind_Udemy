import MeetupDetail from "@/components/meetups/MeetupDetail";
import { meetupsData } from "@/pages";

export default function MeetupDetailPage() {
  return <MeetupDetail {...meetupsData[0]} />;
}
