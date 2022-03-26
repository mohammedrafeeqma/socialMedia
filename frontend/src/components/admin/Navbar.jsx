import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>Admin</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Rightbar;
