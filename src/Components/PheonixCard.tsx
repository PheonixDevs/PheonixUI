import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  SxProps,
  Box,
} from "@mui/material";

interface PheonixCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonText2?: string;
  buttonDisabled?: boolean;
  buttonText1?: string;
  buttonDisabled1?: boolean;
  onClickButton?: () => void;
  handleCancelbutton?: () => void;
  style?: React.CSSProperties;
  sx?: SxProps; 
  children?: React.ReactNode;
  height?: string | number; 
  width?: string | number; 
}

const PheonixCard: React.FC<PheonixCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonDisabled,
  buttonText1,
  buttonDisabled1,
  onClickButton,
  buttonText2,
  handleCancelbutton,
  children,
  height = "auto",
  width = "calc(100% - 20px)",
  sx,

}) => {
  return (
   <Box
    sx={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...sx
      }}
      
    >
      <Card
        style={{
          borderRadius: "7.5px",
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          color: "#034342",
        }}
      >
        {imageSrc && (
          <CardMedia
            component="img"
            height="140"
            image={imageSrc}
            alt={imageAlt}
            style={{
              borderTopLeftRadius: "7.5px",
              borderTopRightRadius: "7.5px",
            }}
          />
        )}
        <CardContent style={{ display: "block" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: "Roboto",
                fontWeight: 600,
                marginBottom: "0.5rem",
                marginTop: "10px",
              }}
            >
              {title}
            </Typography>
            {buttonText && (
              <Button
                disabled={buttonDisabled}
                variant="contained"
                color="primary"
                size="small"
                onClick={onClickButton}
                style={{
                  backgroundColor: "#032C43",
                  color: "white",
                }}
              >
                {buttonText}
              </Button>
            )}
          </div>
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                marginBottom: "1rem",
              }}
            >
              {description}
            </Typography>
          )}
          {children}
          {(buttonText1 || buttonText2) && (
            <div style={{ marginTop: "1rem" }}>
              {buttonText2 && (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#165D59",
                    color: "#FFFFFF",
                    marginRight: "1rem",
                    padding: "6px 16px",
                  }}
                  size="small"
                  onClick={handleCancelbutton}
                >
                  {buttonText2}
                </Button>
              )}
              {buttonText1 && (
                <Button
                  disabled={buttonDisabled1}
                  variant="contained"
                  size="small"
                  onClick={onClickButton}
                  style={{
                    backgroundColor: "#000000",
                    opacity: buttonDisabled1 ? 0.2 : 1,
                    padding: "6px 16px",
                    color: "white",
                  }}
                >
                  {buttonText1}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PheonixCard;
