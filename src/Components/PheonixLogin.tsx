import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PheonixTextField from "./PheonixTextfield";
import PheonixButton from "../Components/PheonixButton";
import PheonixBox from "../Components/PheonixBox";
import PheonixPaper from "../Components/PheonixPaper";
import { Container, Stack, Box } from "@mui/material";


interface LoginProps {
  emailTextField?: Omit<React.ComponentProps<typeof PheonixTextField>, 'type'>;
  passwordTextField?: Omit<React.ComponentProps<typeof PheonixTextField>, 'type'>;
  loginButton?: React.ComponentProps<typeof PheonixButton>;
  paperProps?: React.ComponentProps<typeof PheonixPaper>;
}

const PheonixLogin: React.FC<LoginProps> = ({ 
  emailTextField = {}, 
  passwordTextField = {}, 
  loginButton = {} ,
  paperProps = {} 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ marginTop: "25px" }}>
      <PheonixBox 
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Container 
          maxWidth="xs" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
          }}
        >
          <PheonixPaper 
            elevation={3} 
            style={{ 
              padding: "20px", 
              marginLeft: "10px", 
              width: "400PX", 
              borderRadius: "0", 
            }}
            {...paperProps}
          >
            <Stack spacing={2} direction="column">
              <Box component="form">
                <PheonixTextField 
                  type="email" 
                  {...emailTextField} 
                />
                <PheonixTextField 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  label="Password" 
                  variant="outlined"
                  {...passwordTextField}
                  endAdornment={ 
                    <InputAdornment 
                      position="end" 
                      style={{ 
                        cursor: "pointer", 
                        marginTop: "0px", 
                        color: "black", 
                      }} 
                      onClick={handleTogglePassword}
                    > 
                      {showPassword ? <Visibility /> : <VisibilityOff />} 
                    </InputAdornment>
                  } 
                />
                <PheonixButton {...loginButton} />
              </Box>
            </Stack>
          </PheonixPaper>
        </Container>
      </PheonixBox>
    </div>
  );
};

export default PheonixLogin;