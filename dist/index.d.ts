import React$1, { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent, CSSProperties } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme as Theme$1 } from '@mui/material/styles';
import { Theme, TextFieldProps } from '@mui/material';
import { SxProps as SxProps$1 } from '@mui/system';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { AutocompleteProps, AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import { SkeletonProps } from '@mui/material/Skeleton';

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

interface PhoenixAutocompleteProps<T, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
    name?: string;
    placeholder?: string;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    endAdornment?: ReactNode;
    style?: CSSProperties;
    className?: string;
    error?: boolean;
    helperText?: string;
    disableClearable?: DisableClearable;
    renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
}
declare const PhoenixAutocomplete: <T extends unknown, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, FreeSolo extends boolean | undefined = false>({ id, options, value, placeholder, label, variant, disabled, onChange, onInputChange, name, endAdornment, style, loading, getOptionLabel, renderOption, renderInput, size, sx, multiple, freeSolo, disableClearable, ...props }: PhoenixAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => react_jsx_runtime.JSX.Element;

interface PheonixSkeletonProps extends SkeletonProps {
    sx?: SxProps<Theme>;
}
declare const PheonixSkeleton: React$1.FC<PheonixSkeletonProps>;

interface DialogModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    entity?: string;
    entityname?: string;
    textTitle?: string;
    subText?: string;
    text?: string;
    height?: string;
    width?: string;
}
declare const PheonixDialog: React$1.FC<DialogModalProps>;

interface PhoenixTextareaProps extends Omit<TextFieldProps, 'multiline'> {
    id?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    rows?: number;
    className?: string;
}
declare const PhoenixTextarea: React.FC<PhoenixTextareaProps>;

export { PhoenixAutocomplete as PheonixAutocomplete, PheonixBox, PheonixButton, PheonixDialog, PheonixPaper, PheonixSkeleton, PheonixSnackBar as PheonixSnackbar, PhoenixTextarea as PheonixTextarea, PheonixTextField as PheonixTextfield };
