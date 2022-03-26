import {makeStyles} from "@material-ui/core"
import { width } from "@mui/system"

const useStyles = makeStyles((theme) => ({
    message:{
        display:'flex',
        flexDirection:'column',
        marginTop:'20px'
    },
    messageTop:{
        display:'flex'
    },
    messageImg:{
        width:'32px',
        height:'32px',
        borderRadius:'50%',
        objectFit:'cover',
        marginRight:'10px'
    },
    messageText:{
        padding:'10px',
        borderRadius:'20px',
        backgroundColor:'#0D8E8E',
        color:'white',
        maxWidth:'300px'
    },
    messageBottom:{
        fontSize:'12px',
        marginTop:'10px'
    },
    own:{
        display:'flex',
        flexDirection:'column',
        marginTop:'20px',
        alignItems:'flex-end',
        backgroundColor:'',
        color:'black'
    }
}))

function Message() {
    const classes = useStyles()
    const own =false
  return (
    <>
    <div className={classes.message}>
        <div className={classes.messageTop}>
            <img
            className={classes.messageImg}
            src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
            />
            <p className={classes.messageText}>hi this is a first message</p>

        </div>
        <div className={classes.messageBottom}>1min ago</div>
    </div>

    <div className={classes.own}>
        <div className={classes.messageTop}>
            <img
            className={classes.messageImg}
            src="https://avatars.githubusercontent.com/u/84516313?v=4"
            />
            <p className={classes.messageText}>hi this is a first message</p>

        </div>
        <div className={classes.messageBottom}>1min ago</div>
    </div>
    </>
  )
}

export default Message