import { useState } from "react";

const Events = ({ events }) => {
  const [eventList, setEventList] = useState(events);

  async function filterBySports() {
    const filteredEvents = await fetch(
      "http://localhost:4000/events?category=sports"
    ).then((res) => res.json());

    setEventList(filteredEvents);
  }

  return (
    <div>
      <h1>Events</h1>

      <button onClick={filterBySports}>Filter by Sports</button>

      {eventList.map((event) => (
        <div key={event.id}>
          <h3>
            {event.id}: {event.title} - {event.date} | {event.category}
          </h3>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Events;

export async function getServerSideProps() {
  const events = await fetch("http://localhost:4000/events").then((res) =>
    res.json()
  );

  return {
    props: {
      events,
    },
  };
}
