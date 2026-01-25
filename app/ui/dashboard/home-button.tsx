'use client';

import Link from "next/link";
import { HiHome } from "react-icons/hi";


export default function HomeButton() {
  return (
    <>
    <div className="flex p-1 justify-items-center items-center h-8 w-8 rounded-2xl bg-black">
    <Link href="/" className="">
      <HiHome className="w-6" />
    </Link>
    </div>
    </>
  );
}