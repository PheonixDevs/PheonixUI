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
import themestyle from "../theme";

interface PheonixCardProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  isPrimaryButtonDisabled?: boolean;
  tertiaryButtonText?: string;
  isTertiaryButtonDisabled?: boolean;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  Styles?: React.CSSProperties;
  sx?: SxProps;
  children?: React.ReactNode;
  cardHeight?: string | number;
  cardWidth?: string | number;
}

const PheonixCard: React.FC<PheonixCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  primaryButtonText,
  isPrimaryButtonDisabled,
  tertiaryButtonText,
  isTertiaryButtonDisabled,
  onPrimaryButtonClick,
  secondaryButtonText,
  onSecondaryButtonClick,
  children,
  cardHeight = "auto",
  cardWidth = "calc(100% - 20px)",
  sx,
}) => {
  return (
    <Box
      sx={{
        width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
        height: typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight,
        ...sx,
      }}
    >
      <Card
        style={{
          borderRadius: "7.5px",
          width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
          height:
            typeof cardHeight === "number" ? `${cardHeight}px` : cardHeight,
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
                fontFamily: themestyle.colors.fontfamily,
                fontWeight: 600,
                marginBottom: "0.5rem",
                marginTop: "10px",
              }}
            >
              {title}
            </Typography>
            {primaryButtonText && (
              <Button
                disabled={isPrimaryButtonDisabled}
                variant="contained"
                color="primary"
                size="small"
                onClick={onPrimaryButtonClick}
                style={{
                  backgroundColor: "#032C43",
                  color: "white",
                }}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
          {description && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                marginBottom: "1rem",
                fontFamily: themestyle.colors.fontfamily,
              }}
            >
              {description}
            </Typography>
          )}
          {children}
          {(tertiaryButtonText || secondaryButtonText) && (
            <div style={{ marginTop: "1rem" }}>
              {secondaryButtonText && (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#165D59",
                    color: "#FFFFFF",
                    marginRight: "1rem",
                    padding: "6px 16px",
                  }}
                  size="small"
                  onClick={onSecondaryButtonClick}
                >
                  {secondaryButtonText}
                </Button>
              )}
              {tertiaryButtonText && (
                <Button
                  disabled={isTertiaryButtonDisabled}
                  variant="contained"
                  size="small"
                  onClick={onPrimaryButtonClick}
                  style={{
                    backgroundColor: "#000000",
                    opacity: isTertiaryButtonDisabled ? 0.2 : 1,
                    padding: "6px 16px",
                    color: "white",
                  }}
                >
                  {tertiaryButtonText}
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
