import React from 'react';
import {Alert as MuiAlert} from '@mui/material';

interface AlertProps {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string;
  }
  
  const PheonixAlert: React.FC<AlertProps> = ({ severity, message }) => {
    return (
      <MuiAlert severity={severity}>
        {message}
      </MuiAlert>
    );
  };
  
  export default PheonixAlert;