import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://first-react-app-3eb72-default-rtdb.firebaseio.com/meetup.json"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
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
      });
  }, []);

  if (isLoading) {
    return <section>Loading...</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {console.log("LOG: Meetups:: ", loadedMeetups)} */}
      <MeetupList meetups={loadedMeetups} />
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetupsPage;
