"use client";

import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/navigation';
import RegisterForm from '@/app/components/RegisterForm';

export default function RegisterPage() {
  const { registerUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  const handleSubmit = async ({ username, password, first_name, last_name }) => {
    try {
      console.log('Attempting to register...');
      await registerUser(username, password, first_name, last_name);
      router.push('/pages/eventos');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}
