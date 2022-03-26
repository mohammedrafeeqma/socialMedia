import {Grid, makeStyles} from "@material-ui/core"
import { useState } from "react"
import { useParams } from "react-router"
import AllFriends from "../../components/friends/AllFriends"
import Discovery from "../../components/friends/Discovery"
import Leftbar from "../../components/friends/Leftbar"
import Navbar from "../../components/Navbar/Navbar"

const useStyles = makeStyles((theme) => ({}))

function Friends() {
    const classes = useStyles()
    const[discover, setDiscover] = useState('')
    const {discovery} = useParams()
    console.log(discovery)
  return (
    <>
    <Navbar/>
    <Grid container>
        <Grid item sm={2}>
            <Leftbar/>
        </Grid>
        <Grid item sm={10}>
            {discovery? <Discovery/> : <AllFriends/>}
        </Grid>
    </Grid>
    </>
  )
}

export default Friends