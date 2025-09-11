import { ReactNode } from "react";
import { ChevronLeft, Search, Download, User, Bell, Settings, BarChart3, Calculator, FileText, PieChart, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeSelector from "./ThemeSelector";

interface LayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const Layout = ({ children, title, breadcrumbs, showBackButton, onBackClick }: LayoutProps) => {
  const sidebarItems = [
    { icon: BarChart3, label: "Master", active: false },
    { icon: FileText, label: "Reports", active: false },
    { icon: Calculator, label: "GL Transactions", active: false },
    { icon: PieChart, label: "Budget", active: true },
    { icon: Briefcase, label: "Petty Cash", active: false },
    { icon: Users, label: "Matching", active: false },
    { icon: Settings, label: "Inventory and Asset Mgmt", active: false },
    { icon: Users, label: "Masters", active: false },
    { icon: Settings, label: "Process", active: false },
    { icon: BarChart3, label: "Smart Reports", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/bc680798-dbaa-4652-9c91-b8bcb6882682.png" alt="ANOUD Technologies" className="h-12 w-auto" />
          </div>
          <div className="mt-2 text-sm text-gray-600">OQIC - Muscat</div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 cursor-pointer transition-colors ${
              item.active 
                ? "bg-blue-50 text-primary border-l-4 border-primary" 
                : "text-gray-600 hover:bg-gray-50"
            }`}>
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-primary text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
                <Input 
                  placeholder="Advanced Search" 
                  className="pl-10 bg-primary border-white/20 text-white placeholder:text-white/70 w-96"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSelector />
              <Bell className="w-5 h-5 text-white/70 cursor-pointer" />
              <Settings className="w-5 h-5 text-white/70 cursor-pointer" />
              <div className="flex items-center gap-2">
                <User className="w-8 h-8 text-white/70" />
                <span className="text-sm">Shakeel Akbar</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumbs and Title */}
          <div className="mb-6">
            {breadcrumbs && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                {showBackButton && (
                  <Button variant="ghost" size="sm" onClick={onBackClick} className="p-1">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                )}
                {breadcrumbs.map((crumb, index) => (
                  <span key={index}>
                    {crumb.href ? (
                      <a href={crumb.href} className="hover:text-primary">{crumb.label}</a>
                    ) : (
                      crumb.label
                    )}
                    {index < breadcrumbs.length - 1 && <span className="mx-2">›</span>}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;