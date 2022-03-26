import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import { Delete, DeleteOutlined, MoreVert, Report, ThumbUp } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import {format} from 'timeago.js'
import { Dialog, ListItemButton } from "@mui/material"
import { useNavigate } from "react-router"

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
        backgroundColor: "white"
        
    },
    card:{
        
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
           marginLeft: theme.spacing(15),
           marginRight: theme.spacing(15)
        }
        
    },
    media:{
        height: 0,
    paddingTop: '56.25%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
    },
    expand:{
        marginLeft:"auto"
    },
    avatar:{
        backgroundColor: red[500]
    },
    likeColor:{
        color:"primary",
        backgroundColor:red
    },
    cardContent:{
        position:'relative'
    },
   option:{
       padding:0,
       margin:0,
       position:'absolute',
       top:-25,
       right:20,
       backgroundColor:'#ededed'
    
   },
   avatarImg:{
       objectFit:'fill',
       width:'40px',
       height:'40px'
   }
   
    
}))

function Post({post}) {
    
    const classes = useStyles()
    const[userFriend, setUserFriend] = useState()
    const[like, setLike] = useState(post ?.likes.length)
    const[isLiked, setIsLiked] = useState(false)
    const[postOption, setPostOption] = useState(false)
    const[refresh, setRefresh] = useState(false)
    const userDetails = useSelector( state => state.userDetails)
    const{ loading, error, user} = userDetails
    let userPost = user?.username === userFriend?.username
    const navigate = useNavigate()

    useEffect(()=>{
        setIsLiked(post?.likes.includes(user._id))
    },[user._id, post?.likes,refresh])

    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get(`/api/user?userId=${post.userId}`)
            setUserFriend(res.data)
        
            
        }
        fetchUser()
    },[post?.userId,post,refresh])


    

    const likeHandler = ()=>{
        try{
            axios.put('/api/post/'+post._id+'/like',{userId: user._id})
        }
        catch(err)
        {}
            setLike(isLiked ? like-1: like+1);
            setIsLiked(!isLiked)
        
    }
    const deletePost=async()=>{
         const res = await axios.delete('/api/post/'+post._id, {userId: user?._id})
         window.location.reload()
         setRefresh(!refresh)
         
    }
  return (
    <>
        
    

    {post?
    <Card className={classes.card}>
        <CardHeader
        avatar={
            <Avatar onClick={()=>{navigate('/profile/'+userFriend.username)}} className={classes.avatar}>
                <img className={classes.avatarImg} src={userFriend?.profilePicture? userFriend.profilePicture:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}/>
            </Avatar>
        }
        action={
            <IconButton aria-label="settings" onClick={()=>{setPostOption(!postOption)}}>
                <MoreVert />
                  
            </IconButton>
            
        }
        title=  {userFriend? userFriend.username :''}
        subheader={format(post.createdAt)}
        >

        </CardHeader>
        <CardContent className={classes.cardContent}>
        {postOption&&  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={classes.option}>
                       {userPost&& <ListItem disablePadding>
                            <ListItemButton onClick={()=>{deletePost(post)}}>
                                <ListItemIcon>
                                    <Delete/>
                                </ListItemIcon>
                                <ListItemText primary='Delete'/>
                            </ListItemButton>
                        </ListItem>}
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Report/>
                                </ListItemIcon>
                                <ListItemText primary='Report'/>
                            </ListItemButton>
                        </ListItem>
                </List>
                
                }
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.desc}
                </Typography>
            </CardActions>
        </CardContent>
        {post.img?
        <CardMedia
        className={classes.media}
        image={post.img}
        title = "city"
        />
        :''}
        <CardActions disableSpacing>
            <IconButton aria-label="like" className={classes.likeColor} onClick={likeHandler}>
                <ThumbUp style={isLiked?{color:"#2ab0b0"}:{color:""}}/>  
            </IconButton>
            <Typography>{like} people like it</Typography>
            <IconButton aria-label="like" className={classes.expand}>
                <Typography>Comments</Typography>
            </IconButton>

        </CardActions>
    </Card>
    :""}
    </>
  )
}


export default Post