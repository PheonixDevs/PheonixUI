import React, { ReactNode } from "react";
import PheonixFooter from "./PheonixFooter";
import PheonixHeader from "./PheonixHeader";
import PheonixPaper from "./PheonixPaper";

interface PheonixLayoutProps {
  title?: ReactNode;
  children: ReactNode;
  hasSidebar?: boolean;
  SidebarComponent?: React.FC<{ isOpen: boolean; onToggle: () => void }>;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  logo?: string;
  logoutIcon?: string;
}

const PheonixLayout: React.FC<PheonixLayoutProps> = ({
  title,
  children,
  hasSidebar = false,
  SidebarComponent,
  isSidebarOpen = false,
  onToggleSidebar,
  logo,
  logoutIcon,
}) => {
  const sidebarWidth = isSidebarOpen ? "300px" : "150px";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <PheonixPaper
        elevation={3}
        padding="0px"
        marginTop="20px"
        marginBottom="20px"
        width="100%"
        height="70%"
        style={{ margin: "auto", display: "flex", flexDirection: "column" }}
      >
        <PheonixHeader
          title={title}
          isSidebarOpen={isSidebarOpen}
          hasSideBar={hasSidebar}
          logo={logo}
          logoutIcon={logoutIcon}
        />
      </PheonixPaper>

      <div style={{ display: "flex", flexGrow: 1 }}>
        {hasSidebar && SidebarComponent && (
          <SidebarComponent
            isOpen={isSidebarOpen}
            onToggle={onToggleSidebar!}
          />
        )}
        <div
          style={{
            flexGrow: 1,
            backgroundColor: "white",
            overflow: "hidden",
            marginLeft: hasSidebar ? sidebarWidth : "0px",
          }}
        >
          {children}
        </div>
      </div>

      <PheonixFooter style={{ left: hasSidebar ? sidebarWidth : "0px" }} />
    </div>
  );
};

export default PheonixLayout;
