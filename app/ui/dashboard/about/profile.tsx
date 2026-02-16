import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-row items-center gap-4 mb-4 md:mb-0 h-full">
      <aside>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 dark:text-blue-300 p-0 mt-5">Paulo Henrique Moreira Santos</h1>
          <p className="text-2xl md:text-3xl font-light text-indigo-400 dark:text-blue-300 p-0 mt-1 text-end">Desenvolvedor Front-end</p>
        </div>
        <div className="mt-10">
          <p className="text-2xl">Olá, sou um desenvolvedor Front-end com foco em React, Next.js e Typescript.<br/>
            Sou apaixonado por tecnologia e estou sempre buscando aprender novas tecnologias.<br/>
            Estou sempre buscando melhorar minhas habilidades e me tornar um desenvolvedor mais eficiente.<br/>
            Gosto de trabalhar em projetos desafiadores e desafios.<br/>
            Também gosto de jogar e ler mangas/HQ&apos;s.<br/>
          </p>
        </div>
      </aside>
      <Image src="/profile1.jpeg" alt="profile" width={450} height={450} className="rounded-full" />
    </div>
  )
}