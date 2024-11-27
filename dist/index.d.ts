import React$1, { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent, CSSProperties } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps, Theme as Theme$1 } from '@mui/material/styles';
import { Theme, TextFieldProps, SxProps as SxProps$2 } from '@mui/material';
import { SxProps as SxProps$1 } from '@mui/system';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { AutocompleteProps, AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import { SkeletonProps } from '@mui/material/Skeleton';
import { SwitchProps } from '@mui/material/Switch';
import { RadioProps } from '@mui/material/Radio';
import { CheckboxProps } from '@mui/material/Checkbox';

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

interface PheonixFooterProps {
    footerText?: string;
    companyName?: string;
    companyLink?: string;
    policyText?: string;
    policyLink?: string;
    style?: React$1.CSSProperties;
    textStyle?: React$1.CSSProperties;
    linkStyle?: React$1.CSSProperties;
}
declare const PheonixFooter: React$1.FC<PheonixFooterProps>;

interface BreadcrumbItem {
    text: string;
    to?: string;
}
interface PheonixBreadcrumbsProps {
    breadcrumbs: BreadcrumbItem[];
    textStyle?: object;
    linkStyle?: object;
}
declare const PheonixBreadcrumbs: React$1.FC<PheonixBreadcrumbsProps>;

interface PheonixSwitchProps extends SwitchProps {
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixSwitch: React$1.FC<PheonixSwitchProps>;

interface PheonixRadioProps extends RadioProps {
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixRadio: React$1.FC<PheonixRadioProps>;

interface PheonixCheckboxProps extends CheckboxProps {
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixCheckbox: React$1.FC<PheonixCheckboxProps>;

interface AccordionItem {
    id: number | string;
    title: string;
    content: string | React$1.ReactNode;
}
interface PheonixAccordionProps {
    items: AccordionItem[];
}
declare const PheonixAccordion: React$1.FC<PheonixAccordionProps>;

interface PheonixCardProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    isPrimaryButtonDisabled?: boolean;
    tertiaryButtonText?: string;
    isTertiaryButtonDisabled?: boolean;
    onPrimaryButtonClick?: () => void;
    onSecondaryButtonClick?: () => void;
    Styles?: React$1.CSSProperties;
    sx?: SxProps$2;
    children?: React$1.ReactNode;
    cardHeight?: string | number;
    cardWidth?: string | number;
}
declare const PheonixCard: React$1.FC<PheonixCardProps>;

interface LoginProps {
    emailTextField?: Omit<React$1.ComponentProps<typeof PheonixTextField>, 'type'>;
    passwordTextField?: Omit<React$1.ComponentProps<typeof PheonixTextField>, 'type'>;
    loginButton?: React$1.ComponentProps<typeof PheonixButton>;
}
declare const PheonixLogin: React$1.FC<LoginProps>;

export { PheonixAccordion as PheonixAccordian, PhoenixAutocomplete as PheonixAutocomplete, PheonixBox, PheonixBreadcrumbs, PheonixButton, PheonixCard, PheonixCheckbox, PheonixDialog, PheonixFooter, PheonixLogin, PheonixPaper, PheonixRadio as PheonixRadioButton, PheonixSkeleton, PheonixSnackBar as PheonixSnackbar, PheonixSwitch, PhoenixTextarea as PheonixTextarea, PheonixTextField as PheonixTextfield };
