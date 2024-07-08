import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import authFetch from "../axiosbase/interceptors";
import CardUse from "../carddis/CardUse";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 230  },
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
];

export default function ProductGrid() {
  const [data, setData] = useState([]);
  useEffect(() => {
    authFetch.get("/api/products").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, []);
  return (
    <>
    {/* {console.log(data)} */}
    <CardUse data={data}/>
    
    <div style={{ height: 400,  width: "100%" }}>
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
