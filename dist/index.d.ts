import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/material';

interface PheonixButtonProps extends ButtonProps {
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    sx?: SxProps<Theme>;
}
declare const PheonixButton: React.FC<PheonixButtonProps>;

export { PheonixButton };
