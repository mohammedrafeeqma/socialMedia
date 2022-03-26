import { Grid, makeStyles, Typography } from "@material-ui/core";
import Navbar from "../../components/Navbar/Navbar";
import ProfileRightBar from "../../components/admin/ProfileRightBar";
import Feed from "../../components/home/feed/Feed";
import Leftbar from "../../components/home/leftbar/Leftbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { EditRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { listuserDetails } from "../../actions/productAction";

const useStyles = makeStyles((theme) => ({
    profile:{
        display:"flex",
        marginTop:theme.spacing(8)
    },
    profileCover:{
        height:"320px",
        position:"relative"
        
    },
    
    profileCoverImg:{
        width:"100%",
        height:"250px",
        objectFit:"cover"
    },
    profileUserImg:{
        width:"150px",
        height:'150px',
        borderRadius:"50%",
        objectFit:"cover",
        position:'absolute',
        top:"150px",
        left:"0",
        right:"0",
        margin:"auto",
        border:"3px solid white"

    },
    profileInfo:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    profileInfoName:{
        fontSize:"24px"
    },
    profileRightBottom:{
        display:"flex",
    },
    profileDiv:{
      
      
    },
    profileEdit:{
      position:'absolute',
      left:680,
      top:275,
    }
}));

function Profile() {
  const classes = useStyles();

  const[user, setUser] = useState('')
  const userDetails = useSelector( state => state.userDetails)
  const {loading, error, user:owner} = userDetails
  const username = useParams().username;
  const dispatch = useDispatch()
  let sameUser = owner?.username === user?.username
  
  const profileUpdate = async(e)=>{
    try {
      console.log(e.target.files[0]);
      let reader = new FileReader
      reader.readAsDataURL(e.target.files[0])
      reader.onloadend = async()=>{
        await axios.post('/api/user/upload/'+owner._id,{image:reader.result})
        dispatch(listuserDetails(owner._id))
      }
    } catch (error) {
      alert(error)
      
    }
  }

  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get(`/api/user?username=${username}`)
      console.log(res.data);
      setUser(res.data)
    }
    fetchUser()
  },[username,owner])

  return (
    <div>
      <Navbar />
      <Grid className={classes.profile}>
        <Grid item sm={2} xs={12}>
          <Leftbar />
        </Grid>
        <Grid item sm={10}>
          <div className="profileRight">
            <div className={classes.profileRightTop}>
              <div className={classes.profileCover}>
                <img
                 className={classes.profileCoverImg} 
                 src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" 
                 />
                 <div className={classes.profileDiv}>
                   <img
                 className={classes.profileUserImg}
                 src={user.profilePicture?user.profilePicture:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}
                 alt=""
                 />
                {sameUser && <div className={classes.profileEdit}>
                   <label htmlFor="imageupdate"><EditRounded/></label>
                   
                   <input onChange={(e)=>{profileUpdate(e)}} type='file' id='imageupdate' style={{display:'none'}}/>
                 </div> }
                 
                 </div>
                 
              </div>
              <div className={classes.profileInfo}>
                    <Typography className={classes.profileInfoName} variant="h4">{user.username}</Typography>
              </div>
            </div>
            <div className={classes.profileRightBottom}>
                    <Grid item sm={8} >
                        <Feed username={username}/>
                    </Grid>
                    <Grid item sm={4}>
                        <ProfileRightBar user={user}/>
                    </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
