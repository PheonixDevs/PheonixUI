import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbItem {
  text: string; 
  to?: string; 
}

interface PheonixBreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  textStyle?: object;
  linkStyle?: object; 
}

const PheonixBreadcrumbs: React.FC<PheonixBreadcrumbsProps> = ({ 
  breadcrumbs ,
  textStyle = {},
  linkStyle = {}
}) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          <Typography
            key={breadcrumb.text}
            color="text.primary"
            sx={{ display: "flex", alignItems: "center" , ...textStyle}}
          >
            {breadcrumb.text}
          </Typography>
        ) : (
          <Link
            key={breadcrumb.text}
            underline="hover"
            color="inherit"
            onClick={() => breadcrumb.to && window.location.assign(breadcrumb.to)}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer", ...linkStyle}}
          >
            {breadcrumb.text}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default PheonixBreadcrumbs;
