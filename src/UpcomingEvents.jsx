import React from "react";
import { EventCard } from "./EventCard";

function UpcomingEvents({ events }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mt-8  ">
        <h3 className="text-xl font-bold mb-4">Upcoming events</h3>
      </div>
      <div className="flex space-x-5">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default UpcomingEvents;
