import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-600">
      
    <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
