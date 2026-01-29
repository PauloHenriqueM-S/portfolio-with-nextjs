import Navigation from "@/app/ui/dashboard/overview/navigation"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col items-self-start justify-center h-full w-full">
        <h1>Apenas um projeto para estudo e criação do meu portfolio</h1>
        <p>Seja bem vindo</p>
      </div>
      <Navigation />
    </div>
  )
}