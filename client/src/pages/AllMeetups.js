import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const token = useSelector(state => state.tokenReducer.token);

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:8000/api/v1/meetups", {
        headers: { Authentication: `Bearer ${token}` },
      });
      const resdata = await response.json();
      const data = resdata.body.meetups;
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    })();
  }, [token]);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
