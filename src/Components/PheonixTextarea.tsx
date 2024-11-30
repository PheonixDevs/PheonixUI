import { ChangeEvent, FocusEvent } from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";
import React from "react";

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

const PhoenixTextarea: React.FC<PhoenixTextareaProps> = ({
  id,
  value,
  name,
  placeholder,
  label,
  variant = "outlined",
  onChange,
  required,
  error,
  helperText,
  rows = 4,
  ...props
}) => {
  return (
    <TextField
      id={id}
      multiline
      value={value}
      name={name}
      placeholder={placeholder}
      label={label}
      variant={variant}
      onChange={onChange}
      required={required}
      error={error}
      helperText={helperText}
      rows={rows}
      {...props}
    />
  );
};

export default PhoenixTextarea;
