import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import authFetch from "../axiosbase/interceptors";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const validationSchema = Yup.object().shape({
//   name: Yup.string('Invalid name').required('Required'),

// });

const initialValues = {
  name: "",
  category: "",
  price: "",
  quantity: "",
  description: "",
};

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];
const backStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  padding: "30px",
  borderRadius: "5px",
  marginBottom: "10px",
};

export default function ProductAdd() {
  const notify = () => toast.success("Registration successful");
  const handleSubmit = (values) => {
    authFetch.post("/api/products/", values).then((y) => {
      console.log(y.data);
    });
    console.log(values);
  };
  return (
    <>
      <Container maxWidth="sm" style={backStyle}>
        <Typography variant="h4" gutterBottom>
          Add Product
        </Typography>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Product Name:"
                    fullWidth
                    // error={touched.name && !!errors.name}
                    // helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="category"
                    label="Product Category:"
                    fullWidth
                    // error={touched.email && !!errors.email}
                    // helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="price"
                    label="Product Price:"
                    fullWidth
                    // error={touched.password && !!errors.password}
                    // helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="quantity"
                    label="Product Quantity:"
                    fullWidth
                    // error={touched.password && !!errors.password}
                    // helperText={touched.password && errors.password}
                  />
                </Grid>
                
                <Grid item xs={12}>
                
                  <ReactQuill
                    label="Product Description:"
                    theme="snow"
                    value={values.description}
                    onChange={(value) =>
                      setFieldValue("description", value)
                    }
                    modules={modules}
                    formats={formats}
                    placeholder="Product Description:"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Add Product
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
