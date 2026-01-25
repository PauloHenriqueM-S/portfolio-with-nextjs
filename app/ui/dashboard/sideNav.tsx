import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';
import SocialLinks from './social-links';

export default function NavBar() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40' href="/">Logo
      <div className='w-32 text-white md:w-40'>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      </Link>
      <div className='flex grow flex-row justify-between items-center space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='flex flex-row justify-center items-center gap-2'>
        <SocialLinks />
        </div>
      </div>
    </div>
  );
}