import React, { ReactNode, CSSProperties } from 'react';
import Paper, { PaperProps } from "@mui/material/Paper";

export interface PheonixPaperProps extends PaperProps {
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

const PheonixPaper: React.FC<PheonixPaperProps> = ({
  children,
  elevation = 1,
  padding,
  height,
  width,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  borderRadius,
  display = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  flexDirection = 'row',
  gap,
  color,
  backgroundColor,
  style,
}) => {
  return (
    <Paper
      elevation={elevation}
      style={{
        padding,
        height,
        width,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        borderRadius,
        display,
        alignItems,
        justifyContent,
        flexDirection,
        gap,
        color,
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </Paper>
  );
};

export default PheonixPaper;
