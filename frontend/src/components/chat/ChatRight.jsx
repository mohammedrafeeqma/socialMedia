import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    chatOnline:{
        marginTop:theme.spacing(15),
        marginLeft:theme.spacing(3)
    },
    chatOnlineFriend:{
        display:'flex',
        alignItems:'center',
        fontWeight:500,
        cursor:'pointor',
        marginTop:'10px'
    },
    chatOnlineImgContainer:{
        position:'relative',
        marginRight:'10px'
    },
    chatOnlineImg:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover',
        border:'1px solid white'
    },
    chatOnlineBadge:{
        width:'10px',
        height:'10px',
        borderRadius:'50%',
        backgroundColor:'limegreen',
        position:'absolute',
        top:'2px',
        right:'2px'
    }
}))

function ChatRight() {
    const classes = useStyles()
  return (
    <div className={classes.chatOnline}>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>


        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>
        <div className={classes.chatOnlineFriend}>
            <div className={classes.chatOnlineImgContainer}>
                <img
                className={classes.chatOnlineImg}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rGMpXCXWET099ikV3fUJ15Eqdnchm_rruyrCgf6cEWGXCWhbVhEu0qK2zyoPVkZi5tU&usqp=CAU'
                />
                <div className={classes.chatOnlineBadge}> </div>
            </div>
            <span className={classes.chatOnlineName}>sinvan</span>

        </div>
        
    </div>
  )
}

export default ChatRight