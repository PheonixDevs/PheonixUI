import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  CSSProperties,
} from "react";
import { SxProps } from "@mui/system";
import TextField from "@mui/material/TextField";

interface PheonixTextFieldProps {
  id?: string;
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  size?: "small" | "medium" ;
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

const PheonixTextField: React.FC<PheonixTextFieldProps> = ({
  id,
  type,
  value,
  placeholder,
  label,
  variant,
  disabled,
  onChange,
  name,
  onFocus,
  onBlur,
  endAdornment,
  style,
  required,
  multiline,
  rows,
  rememberMe,
  className,
  error,
  helperText,
 ...props
}) => {
  return (
    <TextField
      id={id}
      type={type}
      value={value}
      name={name}
      size={"medium"}
      placeholder={placeholder}
      label={label}
      variant={variant}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: endAdornment,
        className: className,
        style: style,
      }}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      required={required}
      {...props}
    />
  );
};
export default PheonixTextField;