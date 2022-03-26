import {Button, makeStyles} from "@material-ui/core"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listuserDetails } from "../../actions/productAction"
import Message from './Message'

const useStyles = makeStyles((theme) => ({
    chatBoxWrapper:{
        marginTop:theme.spacing(10),
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        position:'relative',
        height:'87vh'
    },
    chatBoxTop:{
        height:'100%',
        overflowY:'scroll',
        paddingRight:'10px'
    },
    chatBoxBottom:{
        marginTop:'5px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    chatMessageInput:{
        width:'80%',
        height:'90px',
        padding:'10px'
    },
    chatSubmitButton:{
        width:'70px',
        height:'40px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointor',
        backgroundColor:'teal',
        color:'white'
    }
}))

function ChatMsg() {
    const classes = useStyles()
    const userDetails = useSelector( state => state.userDetails)
    const {loading, error, user} = userDetails
    const dispatch = useDispatch()
    const id = localStorage.getItem('userId')
    useEffect(()=>{
        dispatch(listuserDetails(id))
    },[])

  return (
    <>
    <div className={classes.chatBox}>
        <div className={classes.chatBoxWrapper}>
            
            <div className={classes.chatBoxTop}>
                <div>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>

            </div>
            <div className={classes.chatBoxBottom}>
                <textarea
                className={classes.chatMessageInput}
                placeholder='write something...'
                ></textarea>
                <Button className={classes.chatSubmitButton}>Send</Button>

            </div>
            
        </div>

    </div>
    </>
  )
}

export default ChatMsg