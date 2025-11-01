// comentários sempre em pt-br

import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import type { User } from './types';

// Componente principal do App
function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  // Função para lidar com o logout
  const handleLogout = () => {
    setUser(null);
  };

  // Renderiza o componente apropriado com base no estado de autenticação do usuário
  return (
    <div className="antialiased font-sans">
      {user ? (
        <HomePage user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;