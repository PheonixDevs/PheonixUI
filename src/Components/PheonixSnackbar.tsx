import React, { useEffect, useState } from "react";
import Snackbar, { SnackbarProps, SnackbarOrigin, SnackbarCloseReason } from "@mui/material/Snackbar";
import { Box, IconButton } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import themestyle from "../theme";

type PheonixSnackBarProps = Omit<SnackbarProps, 'anchorOrigin'> & {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  customAction?: React.ReactNode;
  severity?: "success" | "error";
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
};

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
  sx,
  ...otherProps
}) => {
  const anchorOrigin: SnackbarOrigin = { vertical, horizontal };
  const [snackbarOpen, setSnackbarOpen] = useState(open);

  const defaultBackgroundColor =
    severity === "success"
      ? themestyle.colors.success
      : themestyle.colors.successLight;
      
  const defaultColor =
    severity === "success" ? themestyle.colors.white : themestyle.colors.error;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setSnackbarOpen(false);
        if (onClose) {
          const event = new Event('timeout') as Event;
          onClose(event, 'timeout');
        }
      }, 100000);
    }
  }, [open, onClose]);

  const handleClose = (
    event: Event | React.SyntheticEvent,
    reason: SnackbarCloseReason
  ) => {
    setSnackbarOpen(false);
    if (onClose) {
      onClose(event, reason);
    }
  };

  const combinedSx: SxProps<Theme> = {
    "& .MuiSnackbarContent-root": {
      backgroundColor: backgroundColor || defaultBackgroundColor,
      color: color || defaultColor,
      justifyContent: "center",
      width,
      height,
      padding: "8px 16px",
      ...(sx as any),
    },
  };

  const shouldShowSuccessIcon = 
    severity === "success" || 
    (severity === "error" && typeof message === "string" && message.includes("deleted"));

  return (
    <Snackbar
      {...otherProps}
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={handleClose}
      message={
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px", color }}>
          {shouldShowSuccessIcon ? (
            <CheckCircleIcon />
          ) : (
            <ErrorOutlineOutlinedIcon />
          )}
          {message}
        </Box>
      }
      action={customAction}
      sx={combinedSx}
    />
  );
};

export default PheonixSnackBar;