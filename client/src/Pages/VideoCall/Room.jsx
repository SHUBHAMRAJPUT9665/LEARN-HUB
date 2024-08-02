import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from "react-redux";

const Room = () => {
  const { state } = useLocation();
  const userData = useSelector((state) => state.auth);
  const userEmail = userData?.data?.email;
  const userName = userData?.data?.fullName;

  const roomCode = state.roomCode;
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const appID = 1494293405;
    const serverSecret = "889b1893e0fa9795cffb07eaaab5fd1b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomCode,
      userEmail,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingContainerRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }, [roomCode, userEmail]);

  return (
    <div className="relative bg-black h-screen w-screen">
      <div className="absolute top-4 left-4 text-white text-xl font-bold">
        Room ID: {roomCode}
      </div>
      <div
        ref={meetingContainerRef}
        className="h-full w-full"
      />
    </div>
  );
};

export default Room;
