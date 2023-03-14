import React from "react";
import PropTypes from "prop-types";

import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";

const UIInput = ({ label, name, control, errorMessage, ...rest }) => {
  const { control: fallbackControl } = useForm();
  return (
    <Controller
      control={control === null ? fallbackControl : control}
      name={name}
      render={({ field }) => (
        <TextField
          label={label}
          variant="outlined"
          error={errorMessage && true}
          helperText={errorMessage}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

UIInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};

export default UIInput;
