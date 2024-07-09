import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import authFetch from "../axiosbase/interceptors";
import CardUse from "../carddis/CardUse";
import { Box } from "@mui/material";


import Fab from '@mui/material/Fab';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";



export default function ProductGrid() {
  const [data, setData] = useState([]);
  const aNav = useNavigate();
  useEffect(() => {
    authFetch.get("/api/products").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, []);

  const handleEdit = (event, params) => {
    console.log(params.row.id);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 230 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
    },
    { field: "quantity", headerName: "Quantity" },
    // { field:  ||, headerName: 'Value', width: 130 },
  
    {
      field: "val",
      headerName: "Value",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (value, row) => `${row.price * row.quantity}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab
              style={{ backgroundColor: "green", color: "#fff" }}
              size="small"
              color="primary"
              aria-label="add"
            >
              <EditNoteIcon sx={{ fontSize: 20 }} 
                onClick={(event)=>{
                  handleEdit(event, params);
                  aNav('/editProduct');
                }}
              />
            </Fab>
            <Fab
              style={{ backgroundColor: "red", color: "#fff" }}
              size="small"
              color="secondary"
              aria-label="edit"
            >
              <DeleteIcon sx={{ fontSize: 20 }} />
            </Fab>
  
            <Fab
              style={{ backgroundColor: "purple", color: "#fff" }}
              size="small"
              disabled
              aria-label="like"
            >
              <VisibilityIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      {/* {console.log(data)} */}
      <CardUse data={data} />

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
