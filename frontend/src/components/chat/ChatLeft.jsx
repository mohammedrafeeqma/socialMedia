import {Container, makeStyles} from "@material-ui/core"
import Conv from "./Conv"

const useStyles = makeStyles((theme) => ({
    mainDiv:{
        backgroundColor: theme.palette.grey[50],
        height:'100vh'
    },
    conversation:{
        display:'flex',
        alignItems:'center',
        padding:'10px',
        cursor:'pointer',
        marginTop:'10px',
    },
    conversationImg:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover',
        marginRight:'20px'
    },
    conversationName:{
        fontWeight:500
    },
    searchInput:{
        marginTop:theme.spacing(15),
        marginLeft: theme.spacing(5),
        width: '80%',
        border: 'none',
        borderBottom: '1px solid gray'
    }
}))

function ChatLeft({conversations}) {
    const classes = useStyles()

    
  return (
    <div className={classes.mainDiv}>

    <input placeholder="Search for friends" className={classes.searchInput} type="text"/>
    <Container >
        {conversations.map((c)=>{
            
            return(
                <Conv key={c._id} conversation={c}/>
            )
        })}
        
    </Container>
    </div>
  )
}

export default ChatLeft