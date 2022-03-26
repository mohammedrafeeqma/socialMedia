import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Chat, PeopleAlt, PersonAdd, Remove } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { listuserDetails } from "../../actions/productAction";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(10),
    backgroundColor: grey[100],
    marginRight: theme.spacing(20),
    marginLeft: theme.spacing(20),
  },
  profileImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",

    objectFit: "cover",
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  leftDiv: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    marginLeft: theme.spacing(2),
  },
}));

function All() {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const id = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [followed, setFollowed] = useState();
  const [friends, setFriends] = useState();
  const [searchUser, setSearchUser] = useState();
  const { searchkey } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(listuserDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/api/user/search/" + searchkey);
      setSearchUser(res.data);
    };
    fetchUser();
  }, [searchkey]);
  useEffect(() => {
    const getFriends = async () => {
        
      try {
        const friendList = await axios.get(
          "/api/user/friends/" + searchUser?._id
        );
        setFriends(friendList.data);

      } catch (error) {}
    };
    getFriends();
   
  }, []);

  useEffect(() => {
    setFollowed(user.following?.includes(searchUser?._id));
    console.log(user.following?.includes(searchUser?._id))
    
  }, []);




  return (
    <>
      <Card className={classes.card}>
        <Box>
          <CardContent>
            <Typography component="div" variant="h5">
              People
            </Typography>

            {searchUser
              ? searchUser.map((u) => {
                  return (
                    <div key={u._id}>
                      <div className={classes.mainDiv}>
                        <div className={classes.leftDiv}>
                          <div className={classes.profile}>
                            <img onClick={()=>{navigate('/profile/'+u.username)}}
                              className={classes.profileImg}
                              src={
                                u.profilePicture
                                  ? u.profilePicture
                                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                              }
                            />
                          </div>
                          <div className={classes.info}>
                            <Typography>{u.username}</Typography>
                            <div style={{ display: "flex" }}>
                              <PeopleAlt style={{ marginRight: "5px" }} />
                              <Typography>
                                {u.following.length} mutual friends
                              </Typography>
                            </div>
                            <Typography>{u.email}</Typography>
                          </div>
                        </div>
                        <div className={classes.friendDetails}>
                           {user.following.includes(u._id)} 
                          {user.following.includes(u._id) ? <Chat /> : <PersonAdd/>}
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })
              : ""}
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default All;
