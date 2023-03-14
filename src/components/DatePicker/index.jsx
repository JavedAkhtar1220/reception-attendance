import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledDatePicker } from "./ui";

const UIDatePicker = ({
  name,
  control,
  errorMessage,
  label,
  disabled,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...field } }) => (
          <StyledDatePicker
            {...field}
            inputRef={ref}
            label={label}
            inputFormat="DD-MMMM-YYYY"
            {...field}
            renderInput={(params) => (
              <TextField
                {...params}
                error={errorMessage && true}
                helperText={errorMessage}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

UIDatePicker.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  control: PropTypes.object,
  errorMessage: PropTypes.string,
};

UIDatePicker.defaultProps = {
  disabled: false,
};

export default UIDatePicker;
