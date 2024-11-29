import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
  Box,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/system";
import themestyle from "../theme";

interface PheonixSideBarProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  selected?: boolean;
  onSelect: (to: string) => void;
  boxSx?: SxProps<Theme>;
  listItemSx?: SxProps<Theme>;
  listIconSx?: SxProps<Theme>;
  listTextSx?: SxProps<Theme>;
}

// Styled Custom Tooltip
const CustomTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: themestyle.colors.fontfamily,
    borderRadius: "8px",
    padding: "6px 12px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
}));

const PheonixSideBar: React.FC<PheonixSideBarProps> = ({
  icon,
  text,
  to,
  selected,
  onSelect,
  listItemSx,
  listIconSx,
  listTextSx,
  boxSx,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0C1445", 
        ...boxSx,
      }}
    >
      <ListItem
        sx={{
          textDecoration: "none",
          height: "auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ...listItemSx,
        }}
        onClick={() => onSelect(to)}
      >
        <CustomTooltip title={text} placement="right">
          <ListItemIcon
            sx={{
              justifyContent: "center",
              alignItems: "center",
               color: "#FFFFFF", 
              backgroundColor: "inherit",
              ...listIconSx,
              '.css-1jis7gu-MuiListItemIcon-root':{
                color:"#FFFFFF",
              }
            }}
          >
            {icon}
          </ListItemIcon>
        </CustomTooltip>
        <ListItemText
          primary={text}
          sx={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "400",
            color:  "#FFFFFF", 
            fontFamily: themestyle.colors.fontfamily,
            ...listTextSx,
          }}
        />
      </ListItem>
    </Box>
  );
};

export default PheonixSideBar;
