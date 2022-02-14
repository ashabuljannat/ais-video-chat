import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" align="center">
        Video Chat
      </Typography>

      <Typography variant="h5" align="center">
        Tap Start call to open your video chat. Enter Your name and copy your
        id. Paste to make a call Section then tap call button.
      </Typography>

      <VideoPlayer />
      <Notifications />
      <Sidebar />
    </div>
  );
}

export default App;
