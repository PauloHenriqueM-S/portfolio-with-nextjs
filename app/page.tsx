import Link from "next/link";
import { TypewriterTailwind } from "./ui/typewriterTailwind";


export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-linear-to-tr to-blue-700 from-indigo-900 p-10 gap-10">
        <div className="flex">
          <TypewriterTailwind />
        </div>
      <div className="flex items-center justify-center ">
        <Link href="/dashboard" className="animate-bounce bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl">Saiba mais</Link>
      </div>
    </div>

  );
}
