import React, { ChangeEvent, useState, useEffect, useContext } from "react";

import PheonixTextField from "./PheonixTextfield";
import PheonixButton from "../Components/PheonixButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PheonixPaper from "../Components/PheonixPaper";
import Box from "@mui/material/Box";
import PheonixBox from "../Components/PheonixBox";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/material";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Item = styled("div")({
  marginBottom: "15px",
  padding: "8px",
  textAlign: "center",
});
const Login: React.FC = () => {

  const [email, setemail] = useState(localStorage.getItem("email") || "");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pasErrorMessage, setPasErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "error"
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleemailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };
  const handlepasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailFocus = () => {
    setErrorMessage("");
  };
  
  const isValidPassword = (password: string): boolean => {
    const minLength = 8;
    return password.length >= minLength;
  };
  const handleChange = () => {
    
  };
  const handleEmailBlur = () => {
    
  };
  const handlePasswordBlur = () => {
   
  };
  const handlePasswordFocus = () => {
    
  };
  function isValidEmail(email: string) {
   // const emailRegex = TEXT_MESSAGES.EMAIL_REG;
  //  return emailRegex.test(email);
  }

  const handleLogin = async () => {
   // if (!isValidEmail(email)) {
     // setErrorMessage(ERROR_MESSAGES.VALID_EMAIL);
    //  return;
   // }

  
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleClose = () => {
    setModalOpen(false);

  };
  const customCloseIcon = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
      style={{ justifyContent: "end", width: "200px" }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
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
            height: "100vh",
          }}
        >
          <PheonixPaper
            elevation={3}
            style={{
              padding: "20px",
              height: "600px",
              marginLeft: "10px",
              width: "400PX",
              borderRadius: "0",
            }}
          >
            <Stack spacing={2} direction="column">


              <Box component="form" onKeyPress={handleKeyPress}>
                <Item>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#181D8C",
                      fontFamily: "Roboto",
                      marginTop: "-10px",
                    }}
                  >
                    {}
                  </Typography>
                </Item>
                <Item></Item>
                <Item>
                  <PheonixTextField
                    id="outlined-error"
                    type="email"
                    value={email}
                    placeholder="Email"
                    label="Email"
                    variant="outlined"
                    onChange={handleemailChange}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    error={Boolean(errorMessage)}
                    helperText={errorMessage || ""}
                    style={{ width: "350px" }}
                  />
                </Item>
                <Item>
                  <PheonixTextField
                    id="outlined-error"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Password"
                    label="Password"
                    variant="outlined"
                    onChange={handlepasswordChange}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    error={Boolean(pasErrorMessage)}
                    helperText={pasErrorMessage || ""}
                    style={{ width: "350px" }}
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
                    disabled={Boolean(errorMessage)}
                  />
                </Item>
                <Item></Item>
                <Item>
                  <PheonixButton
                    onClick={handleLogin}
                  />
                </Item>
              </Box>
            </Stack>
          </PheonixPaper>
        </Container>

      </PheonixBox>
    </div>
  );
};
export default Login;
