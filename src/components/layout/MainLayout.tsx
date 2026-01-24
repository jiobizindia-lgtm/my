import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface LayoutContextType {
  hideNavbar: boolean;
  setHideNavbar: (hide: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  hideNavbar: false,
  setHideNavbar: () => {},
});

export const useLayout = () => useContext(LayoutContext);

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleCollapseToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <LayoutContext.Provider value={{ hideNavbar, setHideNavbar }}>
      <div className="min-h-screen bg-background">
        <TopNavbar 
          onMenuToggle={handleMenuToggle} 
          isSidebarOpen={isSidebarOpen}
          isHidden={hideNavbar}
        />
        
        <Sidebar
          isOpen={isSidebarOpen}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleCollapseToggle}
          onClose={handleSidebarClose}
        />

        <main
          className={cn(
            "min-h-screen transition-all duration-300",
                        hideNavbar ? "pt-0" : "pt-16",
            isSidebarCollapsed ? "lg:pl-16" : "lg:pl-64"
          )}
        >
          <div className={cn("p-4 lg:p-6", hideNavbar && "h-[calc(100vh-0.5rem)]")}>
            <Outlet />
          </div>
        </main>
      </div>
    </LayoutContext.Provider>
  );
};

export default MainLayout;
