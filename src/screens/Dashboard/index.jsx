import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  UIButton,
  UICountryList,
  UIDatePicker,
  UITextField,
} from "../../components";
import {
  Form,
  FormWrapper,
  StyledFormHeading,
  StyledLink,
} from "../../styles/ui";
import { visitorSchema } from "./schema";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(visitorSchema),
    defaultValues: { name: "", phone: "", visit_date: "", purpose: "" },
  });

  const onSubmit = (data) => {
    alert("Record added successfully");
    reset();
  };

  return (
    <FormWrapper>
      <StyledFormHeading>Visitor Form</StyledFormHeading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UITextField
          control={control}
          name="name"
          sx={{ mb: "1em" }}
          label="Username"
          errorMessage={errors.name?.message}
          fullWidth
        />
        <Box sx={{ mb: "1em" }}>
          <UICountryList
            control={control}
            name="phone"
            sx={{ mb: "1em" }}
            label="Phone Number"
            errorMessage={errors.phone?.message}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: "1em" }}>
          <UIDatePicker
            control={control}
            name="visit_date"
            label="Date"
            errorMessage={errors.visit_date?.message}
          />
        </Box>
        <UITextField
          control={control}
          name="purpose"
          sx={{ mb: "1em" }}
          label="Purpose of Visit"
          errorMessage={errors.purpose?.message}
          fullWidth
          multiline
        />

        <UIButton
          type="submit"
          label="Add Record"
          fullWidth
          sx={{ mb: "1em" }}
        />
      </Form>
      <Box sx={{ textAlign: "end", my: "1em" }}>
        <StyledLink to="/history">History</StyledLink>
      </Box>
    </FormWrapper>
  );
};

export default Dashboard;
