import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Feed from "../../components/home/feed/Feed";
import Leftbar from "../../components/home/leftbar/Leftbar";
import Rightbar from "../../components/home/rightbar/Rightbar";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login")
    }
  });
// ! this is critical comments
// * this is a highlighted comment
// todo: this is todo comment
// ? this a question comment
// this is a normal comment
  return (
    <div className="App">
      <Navbar val={setMenu} menu={menu} />

      <Grid container>
        <Grid item sm={2} xs={12}>
          <Leftbar val={menu} />
        </Grid>
        <Grid item sm={7} xs={12}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
