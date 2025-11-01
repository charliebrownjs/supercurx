import React from 'react';
import type { User } from '../types';

// Ensure google object is available on window for TypeScript
declare global {
  interface Window {
    google: any;
  }
}

interface HomePageProps {
  user: User;
  onLogout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ user, onLogout }) => {
  const handleLogoutClick = () => {
    // When logging out, we disable Google's automatic sign-in for the next visit.
    if (window.google && window.google.accounts) {
      window.google.accounts.id.disableAutoSelect();
    }
    onLogout();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 dark:text-white">
      <div className="w-full max-w-md p-8 text-center bg-white rounded-2xl shadow-xl dark:bg-gray-800 m-4">
        <img
          src={user.picture}
          alt="Foto do Perfil"
          className="w-24 h-24 mx-auto rounded-full ring-4 ring-blue-500"
        />
        <h1 className="mt-6 text-4xl font-bold">
          Olá Mundo!
        </h1>
        <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
          Bem-vindo, {user.name}!
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          {user.email}
        </p>
        <button
          onClick={handleLogoutClick}
          className="w-full py-3 px-4 mt-8 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
        >
          Sair
        </button>
      </div>
    </div>
  );
};
