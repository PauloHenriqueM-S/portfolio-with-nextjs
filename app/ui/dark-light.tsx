"use client";

import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "@/app/ui/theme-context";

export default function DarkLight() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full 
                transition-all duration-300
                bg-slate-200 dark:bg-slate-700
                hover:bg-slate-300 dark:hover:bg-slate-600
                text-slate-800 dark:text-slate-200
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