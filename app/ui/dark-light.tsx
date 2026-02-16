"use client";

import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "@/app/ui/theme-context";

export default function DarkLight() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full mt-2
                transition-all duration-300
                bg-blue-300 dark:bg-indigo-700
                hover:bg-blue-300 dark:hover:bg-indigo-600
                text-indigo-800 dark:text-blue-200
                shadow hover:shadow-lg"
      aria-label={`Mudar para ${theme === 'light' ? 'modo escuro' : 'modo claro'}`}
    >
      {theme === 'light' ? (
        <IoMdMoon className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <IoIosSunny className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
      )}
    </button>
  );
}