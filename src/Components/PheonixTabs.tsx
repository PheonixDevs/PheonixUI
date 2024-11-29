import React, { useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabDataItem {
  label: string;
  content?: React.ReactNode;
  sx?: SxProps<Theme>;
}

interface CustomTabsProps {
  tabData: TabDataItem[];
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  tabsProps?: {
    sx?: React.CSSProperties;
    [key: string]: any;
  };
  tabProps?: {
    sx?: React.CSSProperties;
    [key: string]: any;
  };
  variant?: "standard" | "fullWidth" | "scrollable";
  orientation?: "horizontal" | "vertical";
}

const PheonixTabs: React.FC<CustomTabsProps> = ({
  tabData,
  onChange,
  tabsProps = {},
  tabProps = {},
  variant = "standard",
  orientation = "horizontal",
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={variant}
        orientation={orientation}
        {...tabsProps}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            {...tabProps}
            sx={{
              ...(tabProps.sx || {}),
              ...(tab.sx || {}),
            }}
          />
        ))}
      </Tabs>

      {tabData[value] && tabData[value].content && (
        <Box sx={{ p: 3 }}>{tabData[value].content}</Box>
      )}
    </Box>
  );
};

export default PheonixTabs;
