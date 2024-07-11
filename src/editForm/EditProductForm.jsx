import React, { useEffect } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field, useFormik } from "formik";
import { toast } from "react-toastify";
import authFetch from "../axiosbase/interceptors";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

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

export default function EditProductForm() {
  const { id } = useParams();
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      quantity: "",
      description: "",
    },
    onSubmit: { handleSubmit },
  });
  useEffect(() => {
    authFetch.get(`/api/products/${id}`).then((y) => {
      console.log(y.data);
      formik.setValues({
        ...y.data,
      });
    });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Edit Product
        </Typography>
        <Formik>
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    value={formik.values.name}
                    name="name"
                    label="Product Name:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    value={formik.values.category}
                    name="category"
                    label="Product Category:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    value={formik.values.price}
                    name="price"
                    label="Product Price:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    value={formik.values.quantity}
                    name="quantity"
                    label="Product Quantity:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReactQuill
                    label="Product Description:"
                    theme="snow"
                    value={formik.values.description}
                    onChange={(value) => setFieldValue("description", value)}
                    modules={modules}
                    formats={formats}
                    placeholder="Product Description:"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Edit Product
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
