'use client';

import Link from "next/link";
import { TypewriterTailwind } from "./ui/typewriterTailwind";
import { useState, useCallback } from "react";


export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const handleComplete = useCallback(() => {
    setShowButton(true);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-linear-to-tr text-blue-200 from-blue-700 to-indigo-900 p-10 gap-10">
        <div className="flex">
          <TypewriterTailwind onComplete={handleComplete} />
        </div>
        <div className={`flex items-center justify-center transition-all duration-500 ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {showButton && (
                <Link
                  href='/dashboard'
                  className="animate-bounce bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105"
                >
                    Saiba mais
                </Link>
            )}
      </div>
    </div>

  );
}
