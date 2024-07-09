import React from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import authFetch from "../axiosbase/interceptors";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";


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

export default function EditProductForm() {
    const aNav = useNavigate()
  const notify = () => toast.success("Registration successful");
  const handleSubmit = (values) => {
    authFetch.post("/api/products/", values).then((y) => {
      console.log(y.data);
    });
    console.log(values);
  };
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Edit Product
        </Typography>
        <Formik
          initialValues={initialValues}
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="category"
                    label="Product Category:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="price"
                    label="Product Price:"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="quantity"
                    label="Product Quantity:"
                    fullWidth
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
                  <Button type="submit" variant="contained" color="primary" onClick={()=>{aNav('/myproduct')}}>
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
