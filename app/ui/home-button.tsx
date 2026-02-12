'use client';

import Link from "next/link";
import { HiLogin } from "react-icons/hi";


export default function HomeButton() {
  return (
    <div className="flex m-0 p-1 justify-center items-center h-8 w-8 rounded-2xl bg-gray-800 dark:bg-gray-200 hover:bg-gray-900 dark:hover:bg-gray-300 transition-all duration-300 shadow-sm hover:shadow">
    <Link href="/" className="flex items-center justify-center" aria-label="Página inicial">
      <HiLogin className="w-5 h-5 md:w-6 md:h-6 text-gray-200 dark:text-gray-800 transition-colors duration-300" />
    </Link>
    </div>
  );
}