import {
    ReactNode,
    CSSProperties,
  } from "react";
  import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
  import TextField from "@mui/material/TextField";
  import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import React from "react";
  
  interface PhoenixAutocompleteProps<
    T,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
  > extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput'
  > {
    name?: string;
    placeholder?: string;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    endAdornment?: ReactNode;
    style?: CSSProperties;
    className?: string;
    error?: boolean;
    helperText?: string;
    disableClearable?: DisableClearable;
    renderInput?: (params: AutocompleteRenderInputParams) => ReactNode;
  }
  
  const PhoenixAutocomplete = <
    T extends unknown,
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
  >({
    id,
    options,
    value,
    placeholder,
    label,
    variant = "outlined",
    disabled,
    onChange,
    onInputChange,
    name,
    endAdornment,
    style,
    loading,
    getOptionLabel,
    renderOption,
    renderInput,
    size = "medium",
    sx,
    multiple,
    freeSolo,
    disableClearable,
    ...props
  }: PhoenixAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
    return (
      <Autocomplete<T, Multiple, DisableClearable, FreeSolo>
        id={id}
        options={options}
        value={value}
        onChange={onChange}
        onInputChange={onInputChange}
        loading={loading}
        disabled={disabled}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        multiple={multiple}
        freeSolo={freeSolo}
        disableClearable={disableClearable}
        sx={sx}
        renderInput={(params) =>
          renderInput ? (
            renderInput(params)
          ) : (
            <TextField
              {...params}
              name={name}
              label={label}
              placeholder={placeholder}
              variant={variant}
              size={size}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {params.InputProps.endAdornment}
                    {endAdornment}
                  </>
                ),
                style: style,
              }}
            />
          )
        }
        {...props}
      />
    );
  };
  
  export default PhoenixAutocomplete;