import React$1, { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/system';

interface PheonixSnackBarProps {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
    open: boolean;
    onClose?: () => void;
    message?: string;
    customAction?: React$1.ReactNode;
    severity?: 'success' | 'error';
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    timeout?: number;
}
declare const PheonixSnackBar: React$1.FC<PheonixSnackBarProps>;

interface AlertProps {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string;
}
declare const PheonixAlert: React$1.FC<AlertProps>;

interface PheonixButtonProps extends ButtonProps {
    label?: string;
    onClick?: (event: React$1.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
}
declare const PheonixButton: React$1.FC<PheonixButtonProps>;

interface PheonixTextFieldProps {
    id?: string;
    type: string;
    value?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    size?: "small" | "medium";
    variant?: "standard" | "outlined" | "filled";
    rememberMe?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    endAdornment?: ReactNode;
    style?: React.CSSProperties;
    required?: boolean;
    className?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    sx?: SxProps;
    multiline?: boolean;
    rows?: number;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
declare const PheonixTextField: React.FC<PheonixTextFieldProps>;

export { PheonixAlert, PheonixButton, PheonixSnackBar as PheonixSnackbar, PheonixTextField };
