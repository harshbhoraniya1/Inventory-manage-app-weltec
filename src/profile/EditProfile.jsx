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

  useEffect(() => {
    authFetch.get(`/api/users/getuser`).then((y) => {
      console.log(y.data);
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

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Container>
    </>
  );
}
