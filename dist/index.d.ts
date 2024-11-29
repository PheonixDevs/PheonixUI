import * as React from 'react';
import React__default, { ChangeEvent, FocusEvent, ReactNode, KeyboardEvent, CSSProperties } from 'react';
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
import { GridColDef } from '@mui/x-data-grid';
import { Dayjs } from 'dayjs';

interface PheonixButtonProps extends ButtonProps {
    label?: string;
    onClick?: (event: React__default.MouseEvent<HTMLElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixButton: React__default.FC<PheonixButtonProps>;

interface PheonixSnackBarProps {
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
    open: boolean;
    onClose?: () => void;
    message?: string;
    customAction?: React__default.ReactNode;
    severity?: "success" | "error";
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    sx?: SxProps<Theme>;
}
declare const PheonixSnackBar: React__default.FC<PheonixSnackBarProps>;

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
    style?: React__default.CSSProperties;
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
declare const PheonixTextField: React__default.FC<PheonixTextFieldProps>;

interface PheonixBoxProps {
    children?: React__default.ReactNode;
    component?: React__default.ElementType;
    style?: React__default.CSSProperties;
    sx?: SxProps<Theme$1>;
}
declare const PheonixBox: React__default.FC<PheonixBoxProps>;

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
declare const PheonixPaper: React__default.FC<PheonixPaperProps>;

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
declare const PheonixSkeleton: React__default.FC<PheonixSkeletonProps>;

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
declare const PheonixDialog: React__default.FC<DialogModalProps>;

interface PhoenixTextareaProps extends Omit<TextFieldProps, "multiline"> {
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
declare const PhoenixTextarea: React__default.FC<PhoenixTextareaProps>;

interface PheonixFooterProps {
    footerText?: string;
    companyName?: string;
    companyLink?: string;
    policyText?: string;
    policyLink?: string;
    style?: React__default.CSSProperties;
    textStyle?: React__default.CSSProperties;
    linkStyle?: React__default.CSSProperties;
}
declare const PheonixFooter: React__default.FC<PheonixFooterProps>;

interface BreadcrumbItem {
    text: string;
    to?: string;
}
interface PheonixBreadcrumbsProps {
    breadcrumbs: BreadcrumbItem[];
    textStyle?: object;
    linkStyle?: object;
}
declare const PheonixBreadcrumbs: React__default.FC<PheonixBreadcrumbsProps>;

interface PheonixSwitchProps extends SwitchProps {
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixSwitch: React__default.FC<PheonixSwitchProps>;

interface PheonixRadioProps extends RadioProps {
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixRadio: React__default.FC<PheonixRadioProps>;

interface PheonixCheckboxProps extends CheckboxProps {
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixCheckbox: React__default.FC<PheonixCheckboxProps>;

interface AccordionItem {
    id: number | string;
    title: string;
    content: string | React__default.ReactNode;
}
interface PheonixAccordionProps {
    items: AccordionItem[];
}
declare const PheonixAccordion: React__default.FC<PheonixAccordionProps>;

interface PheonixHeaderProps {
    title?: ReactNode;
    children?: ReactNode;
    isSidebarOpen?: boolean;
    hasSideBar: boolean;
    logo?: string;
    logoutIcon?: string;
    onLogout?: () => void;
    customStyles?: React__default.CSSProperties;
}
declare const PheonixHeader: React__default.FC<PheonixHeaderProps>;

interface PheonixLayoutProps {
    title?: ReactNode;
    children: ReactNode;
    hasSidebar?: boolean;
    SidebarComponent?: React__default.FC<{
        isOpen: boolean;
        onToggle: () => void;
    }>;
    isSidebarOpen?: boolean;
    onToggleSidebar?: () => void;
    logo?: string;
    logoutIcon?: string;
}
declare const PheonixLayout: React__default.FC<PheonixLayoutProps>;

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
    Styles?: React__default.CSSProperties;
    sx?: SxProps$2;
    children?: React__default.ReactNode;
    cardHeight?: string | number;
    cardWidth?: string | number;
}
declare const PheonixCard: React__default.FC<PheonixCardProps>;

interface LoginProps {
    emailTextField?: Omit<React__default.ComponentProps<typeof PheonixTextField>, "type">;
    passwordTextField?: Omit<React__default.ComponentProps<typeof PheonixTextField>, "type">;
    loginButton?: React__default.ComponentProps<typeof PheonixButton>;
    paperProps?: React__default.ComponentProps<typeof PheonixPaper>;
}
declare const PheonixLogin: React__default.FC<LoginProps>;

interface ToolbarProps {
    onExportClick?: () => void;
    onFilterChange?: (value: string) => void;
}
interface PheonixTableProps {
    columns: GridColDef[];
    rows: any[];
    height?: number;
    width?: string;
    sx?: Record<string, any>;
    components?: {
        Toolbar?: React.ElementType<ToolbarProps>;
    };
    paginationModel?: {
        pageSize: number;
        page: number;
    };
    onPaginationModelChange?: (newPaginationModel: {
        pageSize: number;
        page: number;
    }) => void;
    pageSizeChange?: (newPageSize: number) => void;
    pageChange?: (newPage: number) => void;
    selectedDate?: Dayjs | null;
    setSelectedDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
    handleDateChange?: (newDate: Dayjs | null) => void;
    pageSizeOptions?: number[];
    loader?: React.ReactNode;
    rowCount?: number;
    pageSize?: number;
    currentPage?: number;
    paginationMeta?: any;
    paginationMode?: any;
    customProp?: string;
    style?: CSSProperties;
    loading?: boolean;
    onSearchQueryChange?: (newQuery: string) => void;
    searchQuery: string;
}
declare const PheonixTable: React.FC<PheonixTableProps>;

interface PheonixSideBarProps {
    icon: React__default.ReactNode;
    text: string;
    to: string;
    selected?: boolean;
    onSelect: (to: string) => void;
    boxSx?: SxProps$2<Theme>;
    listItemSx?: SxProps$2<Theme>;
    listIconSx?: SxProps$2<Theme>;
    listTextSx?: SxProps$2<Theme>;
}
declare const PheonixSideBar: React__default.FC<PheonixSideBarProps>;

interface TabDataItem {
    label: string;
    content?: React__default.ReactNode;
    sx?: SxProps<Theme$1>;
}
interface CustomTabsProps {
    tabData: TabDataItem[];
    onChange?: (event: React__default.SyntheticEvent, newValue: number) => void;
    tabsProps?: {
        sx?: React__default.CSSProperties;
        [key: string]: any;
    };
    tabProps?: {
        sx?: React__default.CSSProperties;
        [key: string]: any;
    };
    variant?: "standard" | "fullWidth" | "scrollable";
    orientation?: "horizontal" | "vertical";
}
declare const PheonixTabs: React__default.FC<CustomTabsProps>;

export { PheonixAccordion, PhoenixAutocomplete as PheonixAutocomplete, PheonixBox, PheonixBreadcrumbs, PheonixButton, PheonixCard, PheonixCheckbox, PheonixTable as PheonixDataGrid, PheonixDialog, PheonixFooter, PheonixHeader, PheonixLayout, PheonixLogin, PheonixPaper, PheonixRadio as PheonixRadioButton, PheonixSideBar, PheonixSkeleton, PheonixSnackBar as PheonixSnackbar, PheonixSwitch, PheonixTabs, PhoenixTextarea as PheonixTextarea, PheonixTextField as PheonixTextfield };
