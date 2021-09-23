import Banner from "../src/assets/chatty.jpg";
import { AppBar, Typography } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Notification from "./components/Notification";
import Options from "./components/Options";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <div
          className={classes.wrapper}
          style={{
            backgroundImage: `url(${Banner})`,
            width: "100%",
            height: "99vh",
          }}
        >
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h4" align="center">
              Chatty App
            </Typography>
          </AppBar>
          <VideoPlayer />
          <Options>
            <Notification />
          </Options>
        </div>
      </div>
    </>
  );
};

export default App;
