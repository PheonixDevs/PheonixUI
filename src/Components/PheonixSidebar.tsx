import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
  Box,
} from "@mui/material";
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
        width: "100%",
        ...boxSx,
      }}
    >
      <ListItem
        sx={{
          textDecoration: "none",
          height: "auto", 
          backgroundColor: "#0C1445",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          flex: 1,
          display: "flex",
          flexDirection: "column", 
          alignItems: "center", 
          ...listItemSx,
        }}
        onClick={() => onSelect(to)}
      >
          <ListItemIcon
          sx={{
            color: selected ? " #FFFFFF" : "inherit",
            backgroundColor: selected ? " #3FA3F7" : "inherit",
            borderRadius:"1px",
            justifyContent: "center",
            alignItems: "center", 
            ...listIconSx,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "700",
            fontFamily: themestyle.colors.fontfamily,
            ...listTextSx
          }}
        />
      </ListItem>
    </Box>
  );
};

export default PheonixSideBar;
