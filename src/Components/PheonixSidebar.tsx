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
        <ListItemIcon
          sx={{
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            backgroundColor: selected ? "#3FA3F7" : "inherit",
            padding: "8px",
            "&:hover": {
              backgroundColor: "#3FA3F7",
              borderRadius: "8px",
            },
            ...listIconSx,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "400",
            color: "#FFFFFF",
            fontFamily: themestyle.colors.fontfamily,
            ...listTextSx,
          }}
        />
      </ListItem>
    </Box>
  );
};

export default PheonixSideBar;