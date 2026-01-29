import Link from "next/link"
import { HiHome, HiIdentification, HiDatabase, HiCollection } from "react-icons/hi";
import { ImPhone } from "react-icons/im";

const links = [
  { name: 'Inicio', href: '/dashboard', icon: HiHome },
  { name: 'Sobre mim', href: '/dashboard/about', icon: HiIdentification },
  { name: 'Skills', href: '/dashboard/skills', icon: HiDatabase },
  { name: 'Projetos', href: '/dashboard/projects', icon: HiCollection },
  { name: 'Contato', href: '/dashboard/contact', icon: ImPhone },
];

export default function Navigation() {
  return (
    <div className="flex flex-col items-center gap-4 mb-4 md:mb-0 h-screen">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-indigo-950/30 "
            aria-current="page"
          >
            <LinkIcon className="w-6 h-6 shrink-0" />
            <p className="truncate">{link.name}</p>
          </Link>
        );
      })}
    </div>
  )
}