import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/material';

interface PheonixButtonProps extends ButtonProps {
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixButton: React.FC<PheonixButtonProps>;

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
declare const PheonixSnackBar: React.FC<PheonixSnackBarProps>;

export { PheonixButton, PheonixSnackBar as PheonixSnackbar };
