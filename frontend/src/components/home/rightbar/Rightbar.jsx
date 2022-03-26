import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { listuserDetails } from "../../../actions/productAction";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  birthdaySpanText: {
    fontWeight: 700,
  },
  rightBarTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: "18px",
    fontWeight: 500,
  },
  onlineFriends: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  onlineFriendsIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  onlineFriendsText: {
    fontWeight: 500,
    fontSize: "18px",
    marginLeft: theme.spacing(1),
  },
  onlineIcon: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "limegreen",
    position: "absolute",
    top: -1,
    left: 24,
    border: "2px solid white",
  },
}));

function Rightbar() {
  const classes = useStyles();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(listuserDetails(id));
  }, [id, dispatch]);

  return (
    <Container className={classes.container}>
      <Card>
        <CardContent style={{ display: "flex" }}>
          <CardMedia
            className={classes.cover}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9-qTFZHMCeME1tDwmwOBW6rsCU-hB8W0VQ&usqp=CAU"
            title="live from rafee"
            style={{
              height: "40px",
              width: "50px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <Typography>
            <Box
              className={classes.birthdaySpanText}
              component="div"
              display="inline"
            >
              Rafeeq Ma
            </Box>{" "}
            and
            <Box
              component="div"
              display="inline"
              className={classes.birthdaySpanText}
            >
              {" "}
              6 other friends{" "}
            </Box>
            have birthday today
          </Typography>
        </CardContent>
      </Card>

      <Box>
        <Typography className={classes.rightBarTitle} variant="h4">
          Online Friends
        </Typography>
        <div className={classes.onlineFriends}>
          <AccountCircleOutlined className={classes.onlineFriendsIcon} />
          <Box
            component="div"
            display="inline"
            className={classes.onlineIcon}
          ></Box>
          <Typography className={classes.onlineFriendsText}>Arif</Typography>
        </div>

        <div className={classes.onlineFriends}>
          <AccountCircleOutlined className={classes.onlineFriendsIcon} />
          <Box
            component="div"
            display="inline"
            className={classes.onlineIcon}
          ></Box>
          <Typography className={classes.onlineFriendsText}>Ajith</Typography>
        </div>

        <div className={classes.onlineFriends}>
          <AccountCircleOutlined className={classes.onlineFriendsIcon} />
          <Box
            component="div"
            display="inline"
            className={classes.onlineIcon}
          ></Box>
          <Typography className={classes.onlineFriendsText}>Sinvan</Typography>
        </div>

        <div className={classes.onlineFriends}>
          <AccountCircleOutlined className={classes.onlineFriendsIcon} />
          <Box
            component="div"
            display="inline"
            className={classes.onlineIcon}
          ></Box>
          <Typography className={classes.onlineFriendsText}>Mansoor</Typography>
        </div>
      </Box>
    </Container>
  );
}

export default Rightbar;
