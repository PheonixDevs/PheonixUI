import React from "react";
import Skeleton, { SkeletonProps  } from "@mui/material/Skeleton";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import themestyle from "../theme";

interface PheonixSkeletonProps extends SkeletonProps {
  sx?: SxProps<Theme>;
}

const PheonixSkeleton: React.FC<PheonixSkeletonProps> = ({
  sx,
  ...props
}) => {
  return (
    <Skeleton
        sx={{
        backgroundColor: themestyle.skeleton.backgroundColor,
        margin: themestyle.skeleton.margin || "8px 0",
        ...sx,
      }}
      {...props}
    />
  );
};

export default PheonixSkeleton;
