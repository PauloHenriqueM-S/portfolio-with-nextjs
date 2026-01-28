'use client';

import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const links = [
  { name: 'GitHub', href: 'https://github.com/PauloHenriqueM-S', icon: AiFillGithub },
  {  name: 'Linkedin', href: 'https://www.linkedin.com/in/paulo-henrique-ms/', icon: AiFillLinkedin },
]

export default function SocialLinks() {
  return (
    <div className="flex flex-row gap-2 md:gap-3">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center
                      rounded-full p-2
                      bg-white/50 dark:bg-gray-800/50
                      text-gray-700 dark:text-gray-300
                      hover:bg-blue-100 dark:hover:bg-blue-900/50
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-all duration-300
                      shadow-sm hover:shadow-md"
          aria-label={`Visitar ${link.name}`}
        >
          <link.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}
