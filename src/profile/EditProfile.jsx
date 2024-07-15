import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, useFormik } from "formik";
import { toast } from "react-toastify";
import authFetch from "../axiosbase/interceptors";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

const shodowss = {
  boxShadow: "rgb(201 201 201 / 50%) 20px 20px 20px 0px",
  border: "1px solid rgb(0 0 0)",
  borderRadius: "10px",
  padding: "15px",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  maxWidth: 300,
};


export default function EditProfile() {
  const { id } = useParams();
  const aNav = useNavigate();

  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
  });
  const handleSubmit = (values) => {
    console.log(values);
    authFetch.patch(`/api/users/updateuser`, values).then((y) => {
      console.log(y);
      toast.success("User updated successfully");
      aNav("/myprofile");
    });
  };

  const handlePasswordChange = (values) => {
    if (values.password != values.confirmPassword) {
      toast.error('New Password and Confirm Password must be the same')
    }
    else if (values.password === values.confirmPassword) {
      authFetch.patch('/api/users/changepassword',values).then((y)=>{
        toast.success('Password changed successfully')
        aNav('/myprofile')
      })
    }
  };

  useEffect(() => {
    authFetch.get(`/api/users/getuser`).then((y) => {
      // console.log(y.data);
      setData({
        email: y.data.email,
        name: y.data.name,
        phone: y.data.phone,
        photo: y.data.photo,
        bio: "",
      });
    });
  }, []);

  const backStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: "30px",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  return (
    <>
      <Container maxWidth="sm" style={backStyle}>
        <Typography variant="h4" gutterBottom>
          Edit Profile
        </Typography>
        <Formik
          initialValues={data}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field as={TextField} name="name" label="Name:" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField} name="email" fullWidth disabled />
                <Typography>Email cannot be changed.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Field as={TextField} name="phone" label="Phone:" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField} name="bio" label="Bio:" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button type="submit" variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
      <Grid sx={{maxWidth: 400, border: 2, borderColor: 'error.main', borderRadius: '16px', p: 2}}>
        <Formik
          initialValues={{ oldPassword: "", password: "" }}
          onSubmit={handlePasswordChange}
        >
          <Form>
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Change Password
              </Typography>
            </Grid>
            <Grid sx={{pb: 1}}>
              <Field
                as={TextField}
                name="oldPassword"
                type="password"
                label="Old Password"
                variant="outlined"
                fullWidth
                // error={false}
                helperText=""
              />
            </Grid>
            <Grid sx={{pb: 1}}>
              <Field
                as={TextField}
                name="password"
                type="password"
                label="New Password"
                variant="outlined"
                fullWidth
                helperText=""
              />
            </Grid>
            <Grid sx={{pb: 1}}>
              <Field
                as={TextField}
                name="confirmPassword"
                type="password"
                label="Confirm New Password"
                variant="outlined"
                fullWidth
                helperText=""
              />
            </Grid>
            <Grid  >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Change Password
              </Button>
            </Grid>
          </Form>
        </Formik>
      </Grid>
    </>
  );
}
