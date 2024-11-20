"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getEvents } from '../../api.js';
import { useAuth } from '../../context/authContext';
import EventGrid from '@/app/components/EventGrid.js';

export default function CatalogPage() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("No tienes autorización para acceder a esta página. Por favor, inicia sesión.");
      router.push('/pages/login');
      return;
    }

    const fetchEvents = async () => {
      try {
        const eventos = await getEvents();
        setItems(eventos.map(evento => createEvent(evento)));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [isAuthenticated, router]);

  const createEvent = ({ id, name, description, icon }) => ({
    id,
    title: name,
    description,
    icon,
  });

  const handleCardClick = (eventId) => {
    router.push(`./description?event=${encodeURIComponent(eventId)}`);
  };

  return (
    <div className="scroll-container">
      <EventGrid items={items} onCardClick={handleCardClick} />
    </div>
  );
}
