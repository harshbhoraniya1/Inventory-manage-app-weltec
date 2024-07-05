import React from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import authFetch from './axiosbase/interceptors';


const validationSchema = Yup.object().shape({
    name: Yup.string('Invalid name').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),

  });
  
  const initialValues = {
    name:'',
    email: '',
    password: '',
  };

  
export default function Registration() {
    const notify = () => toast.success("Registration successful")
    const handleSubmit = (values) => {
        authFetch.post(`/api/users/register`,values).then((y) => {
            console.log(y.data);
            notify();
          });
        console.log(values);
      };

  return (
    <>
        <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
 
    </>
  )
}
