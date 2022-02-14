import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SocketContext } from "../Context";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "350px",
    // [theme.breakpoints.down('xs')]: {
    //   width: '300px',
    // },
  },
  gridContainer: {
    justifyContent: "center",
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
  call: {
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    background: "lemonchiffon",
    width: 80,
    height: 70,
    marginLeft: 10,
    cursor: "pointer",
  },
}));

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    dial,
  } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {!stream && (
        <h4 className={classes.call} onClick={dial}>
          start call
        </h4>
      )}

      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              controls
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted & !callEnded ? (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              controls
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      ) : null}
    </Grid>
  );
};

export default VideoPlayer;
