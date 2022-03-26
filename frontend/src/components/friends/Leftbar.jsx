import {Container, makeStyles, Typography} from "@material-ui/core"
import GroupsIcon from '@mui/icons-material/Groups';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
    container:{
        position:'sticky',
        top:0,
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.grey[50],
        height:'100vh',
    },
    item:{
        display:'flex',
        alignItems:'center',
        marginBottom: theme.spacing(4)
    },
    icon:{
        marginRight: theme.spacing(1)
    },
    text:{
        fontWeight: 900,
        fontSize:'20px'
    }
}))

function Leftbar() {
    const classes = useStyles()
    const navigate = useNavigate()
  return (
    <>
        <Container className={classes.container}>
            <div className={classes.item} onClick={()=>navigate('/friends')}>
                <GroupsIcon className={classes.icon}/>
                <Typography className={classes.text}>All Friends</Typography>
            </div>

            <div className={classes.item} onClick={()=>navigate('/friends/:discovery')}>
                <TravelExploreIcon className={classes.icon}/>
                <Typography className={classes.text}>Discovery</Typography>
            </div>
        </Container>
    </>
  )
}

export default Leftbar