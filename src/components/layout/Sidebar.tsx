import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  TrendingUp,
  MessageSquare,
  Video,
  FileText,
  User,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Academic Performance", path: "/academic" },
  { icon: MessageSquare, label: "Interact with Students", path: "/chat" },
  { icon: Video, label: "Classes", path: "/classes" },
  { icon: FileText, label: "Tests", path: "/tests" },
  { icon: User, label: "Manage Profile", path: "/profile" },
  { icon: AlertCircle, label: "Register a Complaint", path: "/complaint" },
];

const Sidebar = ({ isOpen, isCollapsed, onToggleCollapse, onClose }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          // Mobile styles
          isOpen ? "translate-x-0" : "-translate-x-full",
          // Desktop styles
          "lg:translate-x-0",
          isCollapsed ? "lg:w-16" : "lg:w-64",
          // Mobile width
          "w-64"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 flex-shrink-0 transition-transform duration-200",
                      !isActive && "group-hover:scale-110"
                    )}
                  />
                  <span
                    className={cn(
                      "font-medium whitespace-nowrap transition-opacity duration-200",
                      isCollapsed && "lg:opacity-0 lg:w-0 lg:overflow-hidden"
                    )}
                  >
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Collapse Toggle - Desktop Only */}
          <div className="hidden lg:flex p-3 border-t border-sidebar-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className={cn(
                "w-full justify-center text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                !isCollapsed && "justify-start"
              )}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  <span>Collapse</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
