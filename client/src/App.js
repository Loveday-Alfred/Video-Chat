import "./App.css";
import Banner from "../src/assets/chat.jpg";
import { AppBar, Typography } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Notification from "./components/Notification";
import Options from "./components/Options";

const App = () => {
  return (
    <>
      <div>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <AppBar position="static" color="inherit">
            <Typography variant="h4" align="center">
              Video Chatty
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
