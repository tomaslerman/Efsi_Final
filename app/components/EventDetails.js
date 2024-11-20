"use client";

export default function EventDetails({ eventDetails }) {
  return (
    <section className="l-card__text">
      <h1>{eventDetails.name}</h1>
      <h4>{eventDetails.description}</h4>
      <p>
        <strong>Fecha:</strong> {new Date(eventDetails.start_date).toLocaleDateString()}
      </p>
      <p>
        <strong>Duración:</strong> {eventDetails.duration_in_minutes} minutos
      </p>
      <p>
        <strong>Precio:</strong> ${eventDetails.price}
      </p>
      <p>
        <strong>Capacidad máxima:</strong> {eventDetails.max_assistance}
      </p>
    </section>
  );
} 