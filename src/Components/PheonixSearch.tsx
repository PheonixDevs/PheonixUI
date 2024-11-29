import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface PheonixSearchProps {
    onChange: (query: string) => void;
    value: string;
  }
 

const PheonixSearch: React.FC<PheonixSearchProps> = ({ value, onChange }) => {
  const [query, setQuery] = useState(value);
  const [isFocused, setIsFocused] = useState(false); 

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onChange(query);
  };

  const handleClear = () => {
    setQuery("");
    onChange("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        variant="outlined"
        size="small"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        style={{
          marginTop: "10px",
          width: "220px",
          marginLeft: "10px",
        }}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)}  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon
                  style={{
                    color: isFocused ? "#208BEE" : "#A0A0A0", 
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {query && (
                <IconButton onClick={handleClear}>
                  <CloseIcon style={{ color: "#208BEE" }} />
                </IconButton>
              )}
            </InputAdornment>
          ),
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderBottom: "2px solid #A0A0A0",
            },
            "& .MuiInputBase-input::placeholder": {
              color: isFocused ? "#208BEE" : "#A0A0A0", 
            },
            "& .MuiOutlinedInput-root": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderBottom: `2px solid ${isFocused ? "#208BEE" : "#A0A0A0"}`, 
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderBottom: "2px solid #208BEE",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PheonixSearch;
