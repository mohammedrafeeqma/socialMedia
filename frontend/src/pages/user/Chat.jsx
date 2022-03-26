import { Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatLeft from "../../components/chat/ChatLeft";
import ChatMsg from "../../components/chat/ChatMsg";
import ChatRight from "../../components/chat/ChatRight";
import Navbar from "../../components/Navbar/Navbar";

const useStyles = makeStyles((theme) => ({}));

function Chat() {
  const classes = useStyles();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/api/conversation/" + user?._id);
        setConversations(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getConversation()
  },[user?._id]);
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <ChatLeft conversations={conversations} />
        </Grid>
        <Grid item sm={7}>
          <ChatMsg />
        </Grid>
        <Grid item sm={3}>
          <ChatRight />
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
