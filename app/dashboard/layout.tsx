import SideNav from "@/app/ui/sideNav";

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="hidden md:block w-full">
        <SideNav />
      </div>

      <main className="flex w-full md:w-full p-4 md:p-6 lg:p-8 md:overflow-y-auto md:pl-0 flex-1">
        <div className="mt-16 md:mt-0 w-full max-w-7xl mx-auto">
          <div className="md:hidden h-16"></div>
          {children}
        </div>
      </main>

      <div className="md:hidden top-0 left-0">
        <SideNav />
      </div>
    </div>
  );
}