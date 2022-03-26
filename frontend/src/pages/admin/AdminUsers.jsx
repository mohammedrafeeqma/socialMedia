import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "../../components/admin/Leftbar";
import Navbar from "../../components/admin/Navbar";
import UsersList from "../../components/admin/usersList/UsersList";
const useStyles = makeStyles((theme) => ({}));

function AdminUsers() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={12}>
          <Leftbar />
        </Grid>
        <Grid style={{marginLeft:"5%"}} item sm={8} xs={12}>
          <UsersList />
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminUsers;
