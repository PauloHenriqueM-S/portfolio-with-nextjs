import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';
import SocialLinks from '@/app/ui/social-links';
import HomeButton from '@/app/ui/home-button';
import DarkLight from '@/app/ui/dark-light';

export default function NavBar() {
  return (
    <div className='flex h-full flex-col px-3 py-4 bg-blue-950 md:px-2'>
      <div className='flex flex-row justify-between'>
      <div className='pb-2'>
      <HomeButton />
      </div>
      <div className='pr-2 pt-1'>
      <DarkLight />
      </div>
      </div>
      <Link className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40' href="/">Logo
      <div className='w-32 text-white md:w-40'>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      </Link>
      <div className='flex grow justify-between items-center space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='flex flex-row justify-center items-center gap-2'>
        <SocialLinks />
        </div>
      </div>
    </div>
  );
}