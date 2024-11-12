import React$1, { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent, CSSProperties } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme as Theme$1 } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { SxProps as SxProps$1 } from '@mui/system';

interface PheonixButtonProps extends ButtonProps {
    label?: string;
    onClick?: (event: React$1.MouseEvent<HTMLElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixButton: React$1.FC<PheonixButtonProps>;

interface PheonixSnackBarProps {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
    open: boolean;
    onClose?: () => void;
    message?: string;
    customAction?: React$1.ReactNode;
    severity?: "success" | "error";
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    sx?: SxProps<Theme>;
}
declare const PheonixSnackBar: React$1.FC<PheonixSnackBarProps>;

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
    sx?: SxProps$1;
    multiline?: boolean;
    rows?: number;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
declare const PheonixTextField: React.FC<PheonixTextFieldProps>;

interface PheonixBoxProps {
    children?: React$1.ReactNode;
    component?: React$1.ElementType;
    style?: React$1.CSSProperties;
    sx?: SxProps<Theme$1>;
}
declare const PheonixBox: React$1.FC<PheonixBoxProps>;

interface PheonixPaperProps {
    children: ReactNode;
    elevation?: number;
    padding?: number | string;
    height?: number | string;
    width?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    borderRadius?: number | string;
    display?: CSSProperties['display'];
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    flexDirection?: CSSProperties['flexDirection'];
    gap?: number | string;
    color?: string;
    backgroundColor?: string;
    style?: CSSProperties;
}
declare const PheonixPaper: React$1.FC<PheonixPaperProps>;

export { PheonixBox, PheonixButton, PheonixPaper, PheonixSnackBar as PheonixSnackbar, PheonixTextField as PheonixTextfield };
