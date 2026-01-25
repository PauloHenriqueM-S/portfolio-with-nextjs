'use client';

import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const links = [
  { name: 'GitHub', href: 'https://github.com/PauloHenriqueM-S', icon: AiFillGithub },
  {  name: 'Linkedin', href: 'https://www.linkedin.com/in/paulo-henrique-ms/', icon: AiFillLinkedin },
]

export default function SocialLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center text-blue-400  hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <link.icon className="w-6" />
        </Link>
      ))}
    </>
  );
}
