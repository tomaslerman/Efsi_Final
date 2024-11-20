"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getEvents, enrollInEvent, unsubscribeFromEvent } from '../../api.js';
import { useAuth } from '../../context/authContext.js';
import { useRouter } from 'next/navigation';
import EventDetails from '@/app/components/EventDetails.js';
import EventLocation from '@/app/components/EventLocation.js';

export default function DescripcionPage() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('event');
  const [eventDetails, setEventDetails] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("No tienes autorización para acceder a esta página. Por favor, inicia sesión.");
      router.push('/pages/login');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const events = await getEvents();
        const event = events.find(evt => evt.id === parseInt(eventId));
        setEventDetails(event);
      } catch (error) {
        console.error('Error al obtener los detalles del evento:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleEnrollment = async () => {
    if (!isAuthenticated) return;
    const storedUser = localStorage.getItem('user');
    const userData = storedUser ? JSON.parse(storedUser) : null;
    const token = userData ? userData.token : null;

    try {
      if (isEnrolled) {
        const response = await unsubscribeFromEvent(eventId, token);
        console.log('Desinscrito:', response);
      } else {
        const response = await enrollInEvent(eventId, token);
        setIsEnrolled(true);
        console.log('Inscrito:', response);
      }
    } catch (error) {
      console.error('Error en la inscripción/desinscripción:', error);
    }
  };

  const toggleLocation = () => {
    setShowLocation(prev => !prev);
  };

  if (!eventDetails) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <main className="l-card">
        <EventDetails eventDetails={eventDetails} />
        <EventLocation 
          eventLocation={eventDetails.event_location}
          showLocation={showLocation}
          toggleLocation={toggleLocation}
        />
        <section className="l-card__userInfo">
          <span>{eventDetails.creator_user.first_name} {eventDetails.creator_user.last_name} (Organizador)</span>
        </section>
        <button onClick={handleEnrollment} className="enrollment-button">
          {isEnrolled ? 'Desinscribirse' : 'Inscribirse'}
        </button>
      </main>
    </div>
  );
}