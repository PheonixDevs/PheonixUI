import React from 'react';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface PheonixBoxProps {
    children?: React.ReactNode;
    component?: React.ElementType; 
    style?: React.CSSProperties;
    sx?: SxProps<Theme>; 
}

const PheonixBox: React.FC<PheonixBoxProps> = ({
    component = "div",
    children,
    sx,
    style
}) => {
    return (
        <Box
            component={component}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...sx }}
            style={style}
        >
            {children}
        </Box>
    );
};

export default PheonixBox;