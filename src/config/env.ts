// src/config/env.ts

export interface Config {
  googleClientId: string;
  googleApiKey: string;
}

const requiredEnvVars = [
  'VITE_GOOGLE_CLIENT_ID',
  'VITE_GOOGLE_API_KEY'
] as const;

// Verifica se todas as variáveis de ambiente necessárias estão definidas
requiredEnvVars.forEach(envVar => {
  if (!import.meta.env[envVar]) {
    throw new Error(`Variável de ambiente obrigatória não encontrada: ${envVar}`);
  }
});

export const config: Config = {
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
} as const;