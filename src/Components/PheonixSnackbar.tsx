import React, { useEffect, useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Box, IconButton } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import themestyle from "../theme";

interface PheonixSnackBarProps {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  open: boolean;
  onClose?: () => void;
  message?: string;
  customAction?: React.ReactNode;
  severity?: "success" | "error";
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  timeout?: number;
  sx?: SxProps<Theme>;
}

const PheonixSnackBar: React.FC<PheonixSnackBarProps> = ({
  open,
  onClose,
  message,
  vertical,
  horizontal,
  customAction,
  severity,
  backgroundColor,
  color,
  width = "auto",
  height = "auto",
  timeout = 3000,
  sx,
}) => {
  const anchorOrigin: SnackbarOrigin = { vertical, horizontal };
  const [snackbarOpen, setSnackbarOpen] = useState(open);
  const defaultBackgroundColor =
    severity === "success"
      ? themestyle.colors.success
      : themestyle.colors.success1;
  const defaultColor =
    severity === "success" ? themestyle.colors.white : themestyle.colors.error;

  useEffect(() => {
    setSnackbarOpen(open);
    if (open) {
      const timer = setTimeout(() => {
        setSnackbarOpen(false);
        onClose && onClose();
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [open, timeout, onClose]);

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={() => {
        setSnackbarOpen(false);
        onClose && onClose();
      }}
      message={
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", color }}>
          {severity === "success" ||
          (severity === "error" && message?.includes("deleted")) ? (
            <CheckCircleIcon />
          ) : (
            <ErrorOutlineOutlinedIcon />
          )}
          {message}
        </Box>
      }
      action={customAction}
      sx={
        {
          "& .MuiSnackbarContent-root": {
            backgroundColor: backgroundColor || defaultBackgroundColor,
            color: color || defaultColor,
            justifyContent: "center",
            width,
            height,
            padding: "8px 16px",
            ...sx,
          },
        } as SxProps<Theme>
      }
    />
  );
};
export default PheonixSnackBar;
