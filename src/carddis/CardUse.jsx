import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Paper, styled } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { red } from "@mui/material/colors";

const CartIcon = styled(ShoppingCartOutlinedIcon)(({}) => ({
  fontSize: 50,
  fontWeight: 1000,
  margin: 0,
  // pl: 3,
  backgroundColor: "inherit",
}));

const MoneyIcon = styled(MonetizationOnOutlinedIcon)(({}) => ({
  fontSize: 50,
  fontWeight: 1000,
  margin: 0,
  // pl: 3,
  backgroundColor: "inherit",
}));

const OutOfStockIcon = styled(ProductionQuantityLimitsOutlinedIcon)(({}) => ({
  fontSize: 50,
  fontWeight: 1000,
  margin: 0,
  // pl: 3,
  backgroundColor: "inherit",
}));

const CategoriesIcon = styled(WidgetsOutlinedIcon)(({}) => ({
  fontSize: 50,
  fontWeight: 1000,
  margin: 0,
  // pl: 3,
  backgroundColor: "inherit",
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  backgroundColor: "inherit",

  color: '#fff',
  cursor: "pointer",
  // "&:hover": {
  //   backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#f5f5f5",
  // },
  fontSize: 30,
  boxShadow: "none",
  margin: 0,
  pl: 0,
}));


const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap", 
  gap: "16px",
  padding: "10px",
};


const card1Style = {
  // minWidth: '275px',
  // height: '250px',
  // flex: "1 1 auto",
  backgroundColor: '#b624ff', // Color for card 1
  color: '#fff',
};

const card2Style = {
  // minWidth: '275px',
  backgroundColor: '#32963d', // Color for card 2
  color: '#fff',
};
const card3Style = {
  // minWidth: '275px',
  backgroundColor: '#c41849', // Color for card 2
  color: '#fff',
};
const card4Style = {
  // minWidth: '275px',
  backgroundColor: '#03a5fc', // Color for card 2
  color: '#fff',
    };
export default function CardUse(data) {
  return (
    <div style={cardContainerStyle}>
    {/* {console.log(data.data.length)} */}
    
      <Card style={card1Style}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={2}>
              <CartIcon />
            </Grid>
            <Grid item xs={10}>
              <Item>Total Products</Item>
              <Item>{data.data.length}</Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card style={card2Style}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={2}>
                <MoneyIcon />
            </Grid>
            <Grid item xs={10}>
              <Item>Total Store Value</Item>
              <Item>8</Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card style={card3Style}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={2}>
                <OutOfStockIcon />
            </Grid>
            <Grid item xs={10}>
              <Item>Out of Stock</Item>
              <Item >8</Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card style={card4Style}>
        <CardContent>
          <Grid container spacing={6}>
            <Grid item xs={2}>
              <Item>
                <CategoriesIcon />
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Item>All Categories</Item>
              <Item >8</Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
