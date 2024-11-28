import React, { useState, useEffect } from "react";

interface PheonixFooterProps {
  footerText?: string; 
  companyName?: string; 
  companyLink?: string; 
  policyText?: string;
  policyLink?: string;
  style?: React.CSSProperties; 
  textStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties; 
}

const PheonixFooter: React.FC<PheonixFooterProps> = ({
  footerText ,
  companyName ,
  companyLink ,
  policyText ,
  policyLink ,
  style,
  textStyle,
  linkStyle,
}) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin:"20px 20px",...style }}>
      <div
        style={{
          position: "relative",
          fontFamily: "Roboto",
          color: "#212121",
          fontSize: "12px",
          fontWeight: 400,
          marginTop: "1px",
          ...textStyle,
        }}
      >
        &copy;{currentYear} <span> {footerText || "All Rights Reserved by "}</span>{" "}
        <a
          href={companyLink || "https://www.pheonixsolutions.com"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#181D8C",
            fontFamily: "Roboto",
            fontWeight: 400,
            textDecoration: "none",
            fontSize: "12px",
            ...linkStyle,
          }}
        >
          {companyName || "Pheonix Solutions"}
        </a>
      </div>
   
        <a
          href={policyLink ||  "https://www.pheonixsolutions.com/privacy-policy"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Roboto",
            color: "#212121",
            fontSize: "12px",
            fontWeight: 400,
            marginTop: "1px",
            textDecoration: "underline",
            ...linkStyle,
          }}
        >
          {policyText || "Terms and Conditions |  Privacy  Policy | Security Policy"}
        </a>
      
    </div>
  );
};

export default PheonixFooter;
