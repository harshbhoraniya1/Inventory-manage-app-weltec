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
import { useNavigate } from "react-router-dom";

export default function ProfileGrid() {
  const [profil, setProfil] = useState([]);
  const anav = useNavigate()

  useEffect(() => {
    authFetch.get("/api/users/getuser").then((y) => {
      setProfil(y.data);
    });
  }, []);

  const shodowss = {
   boxShadow: "rgb(201 201 201 / 50%) 20px 20px 20px 0px",
   border: "1px solid rgb(0 0 0)",
   borderRadius: "10px",
   margin: "auto",
   padding: '15px',
   backgroundColor: "rgba(0, 0, 0, 0.1)"
  }
  const btn = {
     borderRadius: "5px",
     padding: "5px 10px",
     backgroundColor: "#2196f3",
     color: "#ffffff",
     fontWeight: "bold",
     
  }

  return (
    <>
      <Card sx={{ maxWidth: 500 }} style={shodowss}>
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
          <Button size="medium" style={btn} onClick={()=>{anav('/editProfile')}}>Edit Profile</Button>
          
        </CardActions>
      </Card>
    </>
  );
}
