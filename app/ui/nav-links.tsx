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

const links = [
  { name: 'Inicio', href: '/dashboard', icon: HiHome },
  { name: 'Sobre mim', href: '/dashboard/about', icon: HiIdentification },
  { name: 'Skills', href: '/dashboard/skills', icon: HiDatabase },
  { name: 'Projetos', href: '/dashboard/projects', icon: HiCollection },
  { name: 'Contato', href: '/dashboard/contact', icon: ImPhone },
];

interface NavLinksProps {
  onItemClick?: () => void;
}

export default function NavLinks({ onItemClick }: NavLinksProps) {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onItemClick}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium",
              "rounded-lg transition-all duration-300",
              "hover:bg-blue-50/10 dark:hover:bg-indigo-950/10",
              "w-full",
              {
                "bg-blue-400/10 dark:bg-indigo-900/50 text-indigo-500 dark:text-blue-400": isActive,
                "text-indigo-400 dark:text-blue-300 hover:text-indigo-400 dark:hover:text-blue-200": !isActive,
              }
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <LinkIcon className="w-6 h-6 shrink-0" />
            <p className="truncate">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
