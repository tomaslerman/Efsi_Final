"use client";

export default function EventCard({ item, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <span className="icon">{item.icon}</span>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
} 