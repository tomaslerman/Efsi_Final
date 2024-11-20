"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/components/LoginForm';

export default function LoginPage() {
  const router = useRouter();
  const { authenticateUser } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  const handleSubmit = async (username, password) => {
    try {
      await authenticateUser(username, password);
      router.push('../../pages/eventos');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed: ' + error.message);
    }
  };

  const redirectToRegister = () => {
    router.push('./register');
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <LoginForm 
        onSubmit={handleSubmit}
        error={error}
        onRegisterClick={redirectToRegister}
      />
    </div>
  );
}
