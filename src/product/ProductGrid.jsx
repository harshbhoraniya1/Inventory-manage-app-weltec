import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import authFetch from "../axiosbase/interceptors";
import CardUse from "../carddis/CardUse";
import { Box } from "@mui/material";

import Fab from "@mui/material/Fab";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductGrid() {


  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const aNav = useNavigate();
  const [open, setOpen] = useState(false);


  const handleOpen = (event, params) => {
    setOpen(true);
    setId(params.row.id);
  };
  const handleDelete = async () => {
    authFetch.delete(`/api/products/${id}`).then((y) => {
      console.log(y);
    });
    await handleClose();
    await setId();
  };

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
     authFetch.get("/api/products").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, [open]);

  const handleEdit = (event, params) => {
    // console.log(params.row.id);
    setId(params.row.id);
    aNav(`/editProduct/${params.row.id}`);
  };

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
              <EditNoteIcon
                sx={{ fontSize: 20 }}
                onClick={(event) => {
                  handleEdit(event, params);
                  
                }}
              />
            </Fab>
            <Fab
              style={{ backgroundColor: "red", color: "#fff" }}
              size="small"
              color="secondary"
              aria-label="edit"
              onClick={(event) => {
                handleOpen(event, params);
              }}
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

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Delete Product
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete this product.
            </Typography>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleClose}>Cancel</button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
