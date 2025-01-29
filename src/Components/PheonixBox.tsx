import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

type PheonixBoxProps<C extends React.ElementType> = {
  children?: React.ReactNode;
  component?: C;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
} & Omit<React.ComponentPropsWithoutRef<C>, "component" | "style" | "sx">;

const PheonixBox = <C extends React.ElementType = "div">({
  component,
  children,
  sx,
  style,
  ...props
}: PheonixBoxProps<C>) => {
  return (
    <Box
      component={component}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
      style={style}
      {...props}
    >
      {children}
    </Box>
  );
};

export default PheonixBox;
