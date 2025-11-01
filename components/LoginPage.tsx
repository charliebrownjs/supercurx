// comentários em pt-br

import React, { useEffect, useRef, useCallback } from 'react';
import type { User } from '../types';
import { config, Config } from '@/src/config/env';

// Função auxiliar para decodificar o JWT do Google
function decodeJwtResponse(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

interface LoginPageProps {
  onLogin: (user: User) => void;
}

// Extensão da interface global do Window para incluir o objeto google
declare global {
  interface Window {
    google: any;
  }
}

// Componente da página de login
export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const handleCredentialResponse = useCallback((response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = decodeJwtResponse(response.credential);
    if (userObject) {
      const user: User = {
        name: userObject.name,
        email: userObject.email,
        picture: userObject.picture,
      };
      onLogin(user);
    }
  }, [onLogin]);

  useEffect(() => {
    if (window.google && window.google.accounts) {
      const GOOGLE_CLIENT_ID = config.googleClientId;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      if (googleButtonRef.current) {
        window.google.accounts.id.renderButton(
          googleButtonRef.current,
          { 
            theme: "filled_blue", 
            size: "large", 
            type: "standard", 
            text: "signin_with", 
            shape: "rectangular",
            logo_alignment: "left"
          } // Customization attributes
        );
      }
    } else {
      console.error("Google Identity Services script not loaded yet.");
    }
  }, [handleCredentialResponse]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-xl dark:bg-gray-800 m-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bem-vindo
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Faça login para continuar
          </p>
        </div>
        
        {/* The Google Sign-In button will be rendered here */}
        <div ref={googleButtonRef} className="flex justify-center"></div>

        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pt-4">
           <p className="font-semibold text-amber-600 dark:text-amber-500">
             Nota: A autenticação real requer um ID de cliente do Google Cloud válido.
           </p>
        </div>
      </div>
    </div>
  );
};
