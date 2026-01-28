import SideNav from "@/app/ui/sideNav";

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
          {children}
        </div>
      </main>

      <div className="md:hidden">
        <SideNav />
      </div>
    </div>
  );
}