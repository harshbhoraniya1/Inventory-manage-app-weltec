import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authFetch from "../axiosbase/interceptors";
import { Divider, Grid, styled, Typography } from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const OutOfStock = styled('span')(({ theme }) => ({
  fontSize: 22,
  color: "#ef5350"
}));
const InStock = styled('span')(({ theme }) => ({
  fontSize: 22,
  color: "#4caf50"
}));
export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    authFetch.get(`/api/products/${id}`).then((y) => {
      setData(y.data);
    });
  }, []);

  return (
    <Grid sx={{ maxWidth: 500, border: 1, borderRadius: 2, p: 2, m: "auto" }}>
      <div>
        <Typography variant="h2" component="h2">
          Product Detail
        </Typography>
      </div>
      <div>
        <Grid sx={{ display: "flex" }}>
          <Typography variant="h5" component="h5">
            Product Availability:
          </Typography>
          <Typography
            fontSize={21}
            variant="body1"
            component="body1"
          >
            {data.quantity < 1 ? <OutOfStock>Out of stock</OutOfStock> : <InStock>In stock</InStock>}
          </Typography>
        </Grid>
        <Divider sx={{ my: 1 }} />

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={24}
            sx={{
              bgcolor: "warning.main",
              color: "secondary.contrastText",
              border: 1,
              borderColor: "secondary.contrastText",
              borderRadius: 2,
            }}
          >
            Name:
          </Typography>
          <Typography fontSize={21} variant="body1" component="body1">
            {data.name}
          </Typography>
        </Grid>

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={18}
            sx={{ fontWeight: "bold" }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: "medium" }} /> SKU:
          </Typography>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.sku}
          </Typography>
        </Grid>

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={18}
            sx={{ fontWeight: "bold" }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: "medium" }} /> Category:
          </Typography>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.category}
          </Typography>
        </Grid>

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={18}
            sx={{ fontWeight: "bold" }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: "medium" }} /> Price:
          </Typography>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.price}
          </Typography>
        </Grid>

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={18}
            sx={{ fontWeight: "bold" }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: "medium" }} /> Quantity in
            stock:
          </Typography>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.quantity}
          </Typography>
        </Grid>

        <Grid sx={{ mt: "1px" }}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={18}
            sx={{ fontWeight: "bold" }}
          >
            <ArrowForwardRoundedIcon sx={{ fontSize: "medium" }} /> Total Value
            in stock:
          </Typography>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.price * data.quantity}
          </Typography>
        </Grid>

        <Divider sx={{ my: 1 }} />

        <Grid sx={{ mt: "1px" }}>
          <Typography
            fontSize={17}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.description}
          </Typography>
        </Grid>

        <Divider sx={{ my: 1 }} />

        <Grid>
          <Typography variant="body1" component="body1" fontSize={12}>
            Created on:
          </Typography>
          <Typography
            fontSize={12}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100 }}
          >
            {data.createdAt}
          </Typography>
        </Grid>

        <Grid>
          <Typography
            variant="body1"
            component="body1"
            fontSize={12}
            sx={{ lineHeight: 0 }}
          >
            Last Updated:
          </Typography>
          <Typography
            fontSize={12}
            variant="body1"
            component="body1"
            sx={{ fontWeight: 100, lineHeight: 0 }}
          >
            {data.updatedAt}
          </Typography>
        </Grid>
      </div>
    </Grid>
  );
}
