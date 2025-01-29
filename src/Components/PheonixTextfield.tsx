import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  CSSProperties,
} from "react";
import { SxProps } from "@mui/system";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField";
import React from "react";

interface PheonixTextFieldProps extends React.ComponentProps<typeof TextField> {
  id?: string;
  type: string;
  value?: string;
  name?: string;
}

const PheonixTextField: React.FC<PheonixTextFieldProps> = ({
  id,
  type,
  value,
  name,
  ...props
}) => {
  return <TextField id={id} type={type} value={value} name={name} {...props} />;
};
export default PheonixTextField;
