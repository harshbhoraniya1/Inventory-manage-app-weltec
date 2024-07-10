import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import authFetch from "../axiosbase/interceptors";
import { Divider, Grid } from "@mui/material";

export default function ProfileGrid() {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    authFetch.get("/api/users/getuser").then((y) => {
      setProfil(y.data);
    });
  }, []);

  const shodowss = {
   boxShadow: "rgb(255 0 0 / 33%) 20px 20px 20px 0px",
   border: "2px solid rgb(255 0 0)",
  }

  return (
    <>
      <Card sx={{ maxWidth: 450 }} style={shodowss}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Grid container spacing={2} >

            <Grid xs={3}>
          <Divider />
              <Typography variant="h4" color="text.primery" sx={6}>
                Name:
              </Typography>
            </Grid>
            <Grid xs={9}>
          <Divider />
              <Typography variant="h4" color="text.secondary" sx={6}>
                {profil.name}
              </Typography>
            </Grid>

            <Grid xs={3}>
          <Divider />
              <Typography variant="h4" color="text.primery" sx={6}>
                Email:
              </Typography>
            </Grid>
            <Grid xs={9}>
          <Divider />
              <Typography variant="h4" color="text.secondary" sx={6}>
                {profil.email}
              </Typography>
            </Grid>

            <Grid xs={3}>
            <Divider />
              <Typography variant="h4" color="text.primery" sx={6}>
                Phone:
              </Typography>
            </Grid>
            <Grid xs={9}>
            <Divider />
              <Typography variant="h4" color="text.secondary" sx={6}>
                {profil.phone}
              </Typography>
            </Grid>

            <Grid xs={3}>
            <Divider />
              <Typography variant="h4" color="text.primery" sx={6}>
                Bio:
              </Typography>
              <Divider />
            </Grid>
            <Grid xs={9}>
            <Divider />
              <Typography variant="h4" color="text.secondary" sx={6}>
              About your self
              </Typography>
              <Divider />
            </Grid>
            
          </Grid>
          
        </CardContent>
        <CardActions>
          <Button size="medium">Edit Profile</Button>
          
        </CardActions>
      </Card>
    </>
  );
}
