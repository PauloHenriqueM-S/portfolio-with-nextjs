'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import SocialLinks from '@/app/ui/social-links';
import HomeButton from '@/app/ui/home-button';
import DarkLight from '@/app/ui/dark-light';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ isMobile, setIsMobile ] = useState(false);
  
  useEffect(() => {
    const checkMobile = () =>{
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);;
  }, []);

  return (
    <>
      {isMobile && !isOpen && (  
    <button
      onClick={() => setIsOpen(true)}
      className='fixed top-4 left-4 z-40 p-3 rounded-lg
              bg-blue-600 text-white
              dark:bg-blue-800 dark:text-gray-200
              shadow-lg hover:shadow-xl
              transition-all duration-300'
      aria-label='Abrir menu'
      >
        <HiMenu className='w-6 h-6' />
    </button>
      )}

    <aside className={`hidden md:flex md:flex-row justify-between w-full m-0 p-0 bg-gradient-to-tr from-blue-600 to-indigo-950 dark:from-indigo-950 dark:to-blue-600 `}>
      <div className='w-full flex flex-row justify-around max-w-7xl m-0 p-0 '>
        <div className='flex items-center justify-between h-16'>
          <div className=''>
            <HomeButton />
          </div>
        </div>
      
        {/*
         <Link className='mb-8 flex flex-row items-center' href="/" aria-label='Página inicial'>
          <div className='w-25 h-25 rounded-full border border-indigo-800 bg-blue-600 dark:bg-blue-800 flex items-center justify-center mb-2'></div> 
            <Image src="/profile1.jpeg" alt="profile picture" width={100} height={100} className='rounded-full w-28 h-30' />
            <span className='text-sm text-blue-500 dark:text-blue-400'>Paulo Henrique</span>
        </Link> 
        */}
      
          <nav className='flex'>
            <NavLinks />
          </nav>

          {/*
          <div className='flex flex-row justify-center items-center pt-6 border-t border-blue-600 dark:border-blue-800 '>
            <p className='text-sm font-medium text-blue-200 dark:text-blue-400 mb-3'>
              Conecte-se comigo!
            </p>
            <div className='flex gap-4'>
              <SocialLinks />
            </div>
          </div> 
          */}

          <div className=''>
            <DarkLight />
          </div>
        
      </div>
    </aside>

    {isOpen && (
      <div className='md:hidden'>
        <div className='fixed inset-0 bg-black/50 z-40 backdrop-blur-sm' onClick={() => setIsOpen(false)} aria-hidden='true'>
          <aside className={`fixed inset-y-0 left-0 z-50 flex flex-col px-4 py-6 w-72 bg-gradient-to-tr from-blue-600 to-indigo-950 dark:from-indigo-950 dark:to-blue-600 border-r border-blue-200 dark:border-blue-800 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-3'>
                <HomeButton />
                <DarkLight />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 rounded-lg text-blue-600 dark:text-blue-950 hover:gb-gray-100 dark:hover:bg-gray-800'
                aria-label='Fechar menu'
              >
                <HiX className='w-5 h-5' />
              </button>
            </div>

            <Link href='/' onClick={() => setIsOpen(false)} className='mb-8 flex flex-col items-center' aria-label='Página inicial' >
              <div className='w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-800 flex items-center justify-center mb-2'>
                <Image src="/profile1.jpeg" alt="profile picture" width={100} height={100} className='rounded-full' />
              </div>
              <span className='text-sm text-blue-500 dark:text-blue-400'>Paulo Henrique</span>
            </Link>

            <nav className='flex-1 mb-6 overflow-y-auto'>
              <NavLinks onItemClick={() => setIsOpen(false)} />
            </nav>

            <div className='pt-6 border-t border-blue-600 dark:border-blue-800'>
              <p className='text-sm font-medium text-blue-200 dark:text-blue-400 mb-3 text-center' >Conecte-se comigo!</p>
              <div className='flex justify-center gap-4'>
                <SocialLinks />
              </div>
            </div>

          </aside>
        </div>
      </div>
    )}
    </>
  );
}