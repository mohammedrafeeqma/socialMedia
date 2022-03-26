import { Container, makeStyles, Typography } from "@material-ui/core";
import { WidgetsOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.grey[50],
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      display: (props) => (props.val ? "block" : "none"),
      backgroundColor: "#0D8E8f",
      color: "white",
      zIndex: 10,
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  text: {
    
    fontWeight: 900,
    fontSize: "20px",
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <WidgetsOutlined className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <WidgetsOutlined className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <WidgetsOutlined className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <WidgetsOutlined className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <WidgetsOutlined className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
