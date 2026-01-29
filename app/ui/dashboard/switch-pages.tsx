'use client'

import { useRouter } from "next/navigation";

const pages = ['/dashboard', '/dashboard/about', '/dashboard/skills', '/dashboard/projects', '/dashboard/contact',];

export function NextPage() {
  const router = useRouter();

  const goToNextPage = () => {
    const currentPath = window.location.pathname;
    const currentIndex = pages.findIndex(page => page === currentPath);

    if (currentIndex === -1) {
      router.push('/dashboard');
      return;
    }

    const nextIndex = (currentIndex + 1) % pages.length;

    router.push(pages[nextIndex]);
  };

  return (
    <button onClick={goToNextPage} className="fixed top-0 right-0 rounded-l-full  transition-all duration-300 h-screen bg-gradient-to-tr from-indigo-800 to-blue-600  hover:from-blue-800/30 hover:to-indigo-600/80 dark:from-blue-600 dark:to-indigo-800 dark:hover:from-indigo-950/30 dark:hover:to-blue-600/80 cursor-pointer">
      <div className="flex flex-col items-center justify-center  w-10 p-0 m-0 ">
        <p className="text-white font-bold text-xl">&gt;</p>
      </div>
    </button>
  )
}

export function PreviousPage(){
  const router = useRouter();

  const goToPreviousPage = () => {
    const currentPath = window.location.pathname;
    const currentIndex = pages.findIndex(page => page === currentPath);

    if (currentIndex === -1) {
      router.push('/dashboard/contact');
      return;
    }

    const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    router.push(pages[prevIndex]);
  };
  return (
  <button onClick={goToPreviousPage} className="fixed top-0 left-0 md:left-[250px] rounded-r-full  transition-all duration-300 h-screen bg-gradient-to-tr from-indigo-800 to-blue-600  hover:from-blue-800 hover:to-indigo-600 dark:from-blue-600 dark:to-indigo-800 dark:hover:from-indigo-950 dark:hover:to-blue-600 cursor-pointer">
      <div className="flex flex-col items-center justify-center  w-10 p-0 m-0 ">
        <p className="text-white font-bold text-xl">&lt;</p>
      </div>
    </button>
    );
}