'use client';

import { useTheme } from './theme-context';

export default function ThemeDemo() {
  const { theme } = useTheme();

  return (
    <div className="p-6 rounded-xl 
                    bg-white dark:bg-gray-900 
                    border border-gray-200 dark:border-gray-700
                    shadow-lg dark:shadow-gray-900/50
                    transition-all duration-300
                    w-full max-w-md mx-auto">
      
      <h2 className="text-xl font-bold mb-4 
                     text-gray-800 dark:text-gray-100 text-center">
        Demonstração do Tema
      </h2>
      
      <div className="space-y-4">
        {/* TEMA ATUAL */}
        <div className="p-4 rounded-lg text-center
                        bg-blue-100 dark:bg-blue-900/30 
                        text-blue-800 dark:text-blue-200">
          <p className="font-medium">Tema atual:</p>
          <p className="text-2xl font-bold">
            {theme === 'light' ? 'Claro ☀️' : 'Escuro 🌙'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg 
                          bg-blue-500 dark:bg-blue-400 
                          text-white text-center font-medium">
            Primária
          </div>
          <div className="p-3 rounded-lg 
                          bg-purple-500 dark:bg-purple-400 
                          text-white text-center font-medium">
            Secundária
          </div>
        </div>
        
        <div className="p-4 rounded-lg 
                        bg-gray-50 dark:bg-gray-800 
                        border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">
            Este card demonstra a mudança automática de cores. 
            Quando você alterna o tema, todas as cores se adaptam instantaneamente.
          </p>
          <div className="mt-3 p-2 rounded bg-gray-100 dark:bg-gray-900">
            <code className="text-xs text-gray-600 dark:text-gray-400">
              Tema atual: <strong>{theme}</strong>
            </code>
          </div>
        </div>
        
        <div className="p-3 rounded-lg border-2 
                        border-green-500 dark:border-green-400
                        bg-green-50 dark:bg-green-900/20">
          <div className="flex items-center gap-2">
            <div className="text-green-600 dark:text-green-400">✅</div>
            <p className="text-sm text-green-800 dark:text-green-300">
              Se este card está verde, o tema está funcionando!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}