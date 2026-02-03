import Navigation from "@/app/ui/dashboard/overview/navigation"

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-full w-full p-0 m-0  gap-4">
        <div className="flex flex-col items-center justify-center text-center h-max gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-300 dark:text-blue-300 p-0 mt-5">Olá, sejam bem-vindos!</h1>
          <p>Este projeto foi desenvolvido para fins didáticos e servindo como meu portfólio pessoal.</p>
          <p>O mesmo se consiste em ser um CRUD, com a finalidade de gerenciar meus próprios projetos.</p>
          <p>Os projetos podem ser criados, editados, deletados e visualizados.</p>
          <p>Tecnologias utilizadas: Next.js, TailwindCSS, Typescript, Postgress(supabase) e Prisma.<br/> Dependendo do momento podem ser que outras tecnologias estejam sendo utilizadas. Meu intiuito é manter este projeto sempre atualizado.</p>
        </div>
        <div className="">
        <Navigation /> 
        </div>
      </div>
  )
}