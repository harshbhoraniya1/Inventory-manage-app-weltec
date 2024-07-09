import React from "react";

import { Formik, Form, Field } from "formik";
import { TextField, Button, Grid, Typography } from "@mui/material";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import authFetch from "./axiosbase/interceptors";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const anav = useNavigate();
  const notify = () => toast.success("Login successful");
  const notifyFail = () => toast.error("Login Failed");

  const handleSubmit = (values) => {
    authFetch.post("/api/users/login", values).then((y) => {
      // localStorage.setItem("userInfo", JSON.stringify(y.data.token));
      console.log(y.data);
      notify();
      anav('/myproduct');
    }).catch(()=>{notifyFail()});
  };

  const margi = {
    margin: "auto",
    width: "50%", 
  }

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid container spacing={2} justifyContent="center"  style={margi}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                  Login
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={false}
                  helperText=""
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={false}
                  helperText=""
                />
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Typography variant="body2">
                  <Button color="primary">Home</Button> Don't have an account?{" "}
                  <Button
                    color="primary"
                    onClick={() => {
                      anav("/registration");
                    }}
                  >
                    Register
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
