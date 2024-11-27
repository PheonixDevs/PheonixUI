import React from "react";
import Radio, { RadioProps } from "@mui/material/Radio";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import themestyle from "../theme";

interface PheonixRadioProps extends RadioProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

const PheonixRadio: React.FC<PheonixRadioProps> = ({ onChange, sx, ...props }) => {
  return (
    <Radio
      onChange={onChange}
      sx={{
        "&.Mui-checked": {
          color: themestyle.colors.primary,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default PheonixRadio;
