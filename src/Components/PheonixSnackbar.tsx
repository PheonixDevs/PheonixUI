import React, { useEffect, useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { Box, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import themestyle from "../theme";

interface PheonixSnackBarProps {
    vertical: 'top' | 'bottom'; 
    horizontal: 'left' | 'center' | 'right';
    open: boolean;
    onClose?: () => void;
    message?: string; 
    customAction?: React.ReactNode;
    severity?: 'success' | 'error';
    snackbarsize?: string;
  }

const PheonixSnackBar: React.FC<PheonixSnackBarProps> = ({ open, onClose, message, vertical, horizontal,customAction,severity  }) => {
  const anchorOrigin: SnackbarOrigin = { vertical, horizontal };
  const [snackbarOpen, setSnackbarOpen] = useState(open);
  const backgroundColor = severity === 'success' ? themestyle.colors.success : themestyle.colors.success1 ;
  const color = severity === 'success' ? themestyle.colors.white : themestyle.colors.error ;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setSnackbarOpen(false);
        onClose && onClose();
      }, 3000);
    }
  }, [open, onClose]);


return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      onClose={() => {
        setSnackbarOpen(false);
        onClose && onClose();
      }}
      message={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color }}>
          {severity === 'success' ||
          (severity === 'error' && message?.includes('deleted')) ? (
            <CheckCircleIcon />
          ) : (
            <ErrorOutlineOutlinedIcon />
          )}
          {message}
        </Box>
      }
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              setSnackbarOpen(false);
              onClose && onClose();
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
      sx={{
        '& .MuiSnackbarContent-root': {
          background: backgroundColor,
          color: color,
          justifyContent: 'center',
          width: 'auto',  
          padding: '8px 16px', 
        },
      }}

    />
  );
};
export default PheonixSnackBar;