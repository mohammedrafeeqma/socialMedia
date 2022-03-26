import { Button, makeStyles, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({}));

const columns = [
  { field: "_id", headerName: "ID", width: 250 },
  { field: "firstname", headerName: "First name", width: 130 },
  { field: "lastname", headerName: "Last name", width: 130 },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 130,
  },
  {
    field: "Dob",
    headerName: "Username",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  }, 
  {
    field: "value",
    headerName: "Value",
    type:"Date",
    description:"this is button",
    width: 160,
    renderCell:(params) => {
      return (
        <div>
          <Button onClick={()=>alert("hii")} variant="contained" color="secondary">View</Button>
          <Button variant="contained" color="primary">Remove</Button>
        </div>
      )
    }
  }
];

function UsersList() {
  const[rows, setRows] = useState([])
  const classes = useStyles();
  const handleGetRowId = (e)=>{
    return e._id
  }
  useEffect(async () => {
    try {
      const users = await axios.get("/api/admin/usersList");
      setRows(users.data)
    } catch (error) {}
  },[]);
  return (
    <div>
      
    <div style={{ height: 600, width: "100%", marginTop: "90px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOption={[10]}
        checkboxSelection
        getRowId={handleGetRowId}


      />
    </div>
    </div>
  );
}

export default UsersList;
