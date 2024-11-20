"use client";

import EventCard from "./EventCard";

export default function EventGrid({ items, onCardClick }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <EventCard
          key={item.id}
          item={item}
          onClick={() => onCardClick(item.id)}
        />
      ))}
    </div>
  );
} 