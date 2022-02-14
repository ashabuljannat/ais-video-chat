import React, { useContext } from "react";
import { SocketContext } from "../Context";
import { makeStyles } from "@mui/styles";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } =
    useContext(SocketContext);

  const useStyles = makeStyles((theme) => ({
    call: {
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      background: "aqua",
      width: 80,
      height: 70,
      marginLeft: 10,
      cursor: "pointer",
    },
    delete: {
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      background: "pink",
      width: 80,
      height: 70,
      marginLeft: 10,
      cursor: "pointer",
    },
  }));

  const classes = useStyles();
  return (
    <>     
      {call.isReceivingCall && !callAccepted && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>{call.name} is Calling: </h2>
          <h4 className={classes.call} onClick={answerCall}>
            <PhoneCallbackIcon /> Answer
          </h4>
          <h4 className={classes.delete} onClick={leaveCall}>
            <CallEndIcon /> Reject
          </h4>
        </div>
      )}
    </>
  );
};

export default Notifications;
