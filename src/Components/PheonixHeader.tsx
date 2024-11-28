import React, { useState, ReactNode } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Menu,
  IconButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface PheonixHeaderProps {
  title?: ReactNode;
  children?: ReactNode;
  isSidebarOpen?: boolean;
  hasSideBar: boolean;
  logo?: string;
  logoutIcon?: string; 
  onLogout?: () => void;
  customStyles?: React.CSSProperties;
}

const PheonixHeader: React.FC<PheonixHeaderProps> = ({
  title,
  children,
  isSidebarOpen = false,
  logo,
  logoutIcon,
  onLogout,
  hasSideBar,
  customStyles = {},
}) => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };



  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const titleMarginLeft = isSidebarOpen ? "260px" : hasSideBar ? "100px" :"20px";

  return (
    <MuiAppBar
      position="static"
      style={{
        background: isMobile ? "linear-gradient(to right, #74B1EA, #82E2F7)" : "white",
        borderBottom: "2px solid #ccc",
        boxShadow: "0px 4px 4px 0px #00000000",
        ...customStyles,
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <>
            {logo && (
              <img
                src={logo}
                alt="Logo"
                style={{ marginLeft: "50px", width: "81px", height: "30px" }}
              />
            )}

            {logoutIcon && (
              <IconButton >
                <img
                  src={logoutIcon}
                  alt="Logout Icon"
                  style={{ width: "29px", height: "29px" }}
                />
              </IconButton>
            )}

            <Menu
              id="menu-appbar"
              anchorEl={mobileMenuAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={mobileMenuOpen}
              onClose={handleMobileMenuClose}
            ></Menu>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: titleMarginLeft,
              }}
            >
              {logo && (
                <img
                  src={logo}
                  alt="Logo"
                  style={{ marginRight: "5px", width: "51px", height: "30px" }}
                />
              )}
              {title}
            </Box>
            {logoutIcon && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => setLogoutModalOpen(true)}>
                  <img
                    src={logoutIcon}
                    alt="Logout Icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        )}
        {children}
      </Toolbar>
      
    </MuiAppBar>
  );
};

export default PheonixHeader;
