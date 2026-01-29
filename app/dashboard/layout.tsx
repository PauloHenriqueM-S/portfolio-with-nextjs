import SideNav from "@/app/ui/sideNav";
import { NextPage, PreviousPage } from "@/app/ui/dashboard/switch-pages";

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <SideNav />
      </div>

      <main className="flex-1 p-4 md:p-6 lg:p-8 md:overflow-y-auto md:pl-0">
        <div className="mt-16 md:mt-0">
          <div className="md:hidden h-16"></div>
          <PreviousPage />
          {children}
          <NextPage />
        </div>
      </main>

      <div className="md:hidden absolute top-0 left-0">
        <SideNav />
      </div>
    </div>
  );
}