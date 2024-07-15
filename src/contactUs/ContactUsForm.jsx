import React from "react";
import { Field, Form, Formik } from "formik";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import authFetch from "../axiosbase/interceptors";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function ContactUsForm() {
  const aNav = useNavigate();
  const handelSubmit = (values) => {
    authFetch.post("/api/contactus", values).then((y) => {
      console.log(y.data);
      toast.success("Product updated successfully");
      aNav("/contact-us");
    });
  };
  const StyledTextareaField = (props) => (
    <Field
      {...props}
      as="textarea"
      type="text"
      fullWidth
      error={false}
      variant="outlined"
      id="message"
      name="message"
    ></Field>
  );
  return (
      <Grid container>
        <Grid
          xs={6}
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.05)",
            p: 4,
            border: 1,
            borderColor: "rgba(0, 0, 0, 0.05)",
            borderRadius: 2,
          }}
        >
          <Formik
            initialValues={{
              message: "",
              subject: "",
            }}
            onSubmit={handelSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label htmlFor="subject">Subject *</label>
                  <Field
                    as={TextField}
                    name="subject"
                    type="text"
                    variant="outlined"
                    fullWidth
                    error={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid>
                    <label htmlFor="message">Message *</label>
                  </Grid>
                  <StyledTextareaField rows={15} cols={40} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
        <Grid
          xs={5}
          sx={{
            color: "white",
            bgcolor: "primary.light",
            ml: 3,
            p: 3,
            border: 1,
            borderColor: "primary.light",
            borderRadius: 2,
            height: 300,
          }}
        >
          <Typography variant="h4" component="h4">
            Our Contact Information
          </Typography>
          <Typography fontSize={18} sx={{mb:7}} variant="h5" component="h5">
            Fill the form or contact us via other channels listed below
          </Typography>

          <Typography fontSize={18} variant="h5" component="h5">
            <CallIcon sx={{fontSize: 'medium'}}/> 070123123123
          </Typography>
          <Typography fontSize={18} variant="h5" component="h5">
            <EmailIcon sx={{fontSize: 'medium'}}/> Support@invent.com
          </Typography>
          <Typography fontSize={18} variant="h5" component="h5">
           <LocationOnIcon sx={{fontSize: 'medium'}}/> Abuja, Nigeria
          </Typography>
          <Typography fontSize={18} variant="h5" component="h5">
            <TwitterIcon sx={{fontSize: 'medium'}}/> @ZinoTrust
          </Typography>
        </Grid>
      </Grid>
      
  );
}
