"use client";

export default function EventLocation({ eventLocation, showLocation, toggleLocation }) {
  return (
    <section className="l-card__location">
      <h2>Lugar del Evento</h2>
      <p onClick={toggleLocation} style={{ cursor: 'pointer' }}>
        <strong>{eventLocation.name}</strong>
      </p>
      <p onClick={toggleLocation} style={{ cursor: 'pointer' }}>
        {eventLocation.full_address}
      </p>
      {showLocation && (
        <p>
          <strong>Ubicación:</strong> {eventLocation.location.name}, {eventLocation.location.province.full_name}
        </p>
      )}
    </section>
  );
} 