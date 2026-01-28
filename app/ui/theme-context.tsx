'use client';

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Inicialização segura do tema com verificação de cliente
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Inicialização só no cliente
  useEffect(() => {
    // Verifica se está no cliente
    if (typeof window === 'undefined') return;
    
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = (saved === 'light' || saved === 'dark') 
      ? saved as Theme 
      : prefersDark ? 'dark' : 'light';
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Sincroniza com DOM
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Renderiza apenas children durante SSR
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Versão segura de useTheme que não quebra a aplicação
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Se não houver contexto, retorna valores padrão em vez de quebrar
  if (!context) {
    console.warn("⚠️ useTheme usado fora de ThemeProvider - usando valores padrão");
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {
        console.warn("⚠️ toggleTheme chamado fora de ThemeProvider");
      }
    };
  }
  
  return context;
}