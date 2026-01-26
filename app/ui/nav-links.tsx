'use client';

import {
  HiHome,
  HiIdentification,
  HiDatabase,
  HiCollection,
} from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/dashboard', icon: HiHome },
  {
    name: 'Sobre mim',
    href: '/dashboard/about',
    icon: HiIdentification,
  },
  { name: 'Skills', href: '/dashboard/skills', icon: HiDatabase },
  { name: 'Projetos', href: '/dashboard/projects', icon: HiCollection },
  { name: 'Contato', href: '/dashboard/contact', icon: ImPhone },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2  text-blue-300 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                ' text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
