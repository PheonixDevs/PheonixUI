import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import themestyle from "../theme";

interface PheonixButtonProps extends MuiButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}
const PheonixButton: React.FC<PheonixButtonProps> = ({
  label,
  disabled,
  onClick,
  ...props
}) => {
  const theme = useTheme();

  return (
    <MuiButton
      disabled={disabled}
      onClick={onClick}
      variant="outlined"
      style={{
        backgroundColor: disabled ? "lightgray" : themestyle.colors.primary,
        color: disabled ? "darkgray" : "white",
        padding: "5px",
        width: "350px",
        height: "42px",
        borderRadius: "5px",
        border: "1px",
        boxSizing: "border-box",
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};
export default PheonixButton;
